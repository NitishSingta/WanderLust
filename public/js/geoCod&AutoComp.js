const apiKey = maptilerApiKey;
const geocodingBaseUrl = "https://api.maptiler.com/geocoding/";

// Get previous values for the country and location fields for edit mode
let previousCountryValue = document.getElementById("country").value.trim();
let previousLocationValue = document.getElementById("location").value.trim();

// Check if the user is in edit mode (if there are pre-filled values)
let isEditMode = previousCountryValue !== "" || previousLocationValue !== "";

// Attach event listeners for user input and fetch suggestions
document.getElementById("country").addEventListener("input", async (event) => {
  const query = event.target.value;

  // If the user has entered something new or cleared the field, fetch suggestions
  if (query.length > 2) {
    const results = await fetchGeocodingResults(query, "country");
    displaySuggestions("countrySuggestions", results, "country", "location");
  } else if (query === "") {
    // If the country field is cleared, disable the suggestions for location
    document.getElementById("location").disabled = false;
    document.getElementById("locationSuggestions").innerHTML = "";
  }
});

document.getElementById("location").addEventListener("input", async (event) => {
  const query = event.target.value;

  // Fetch location suggestions if the location field is updated or cleared
  if (query.length > 2) {
    const results = await fetchGeocodingResults(query, "place");
    displaySuggestions("locationSuggestions", results, "location", "");
  } else if (query === "") {
    document.getElementById("locationSuggestions").innerHTML = "";
  }
});

// Fetch geocoding results from the Maptiler API
async function fetchGeocodingResults(query, type) {
  const url = `${geocodingBaseUrl}${encodeURIComponent(
    query
  )}.json?key=${apiKey}&type=${type}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.features || [];
  } catch (error) {
    console.error("Error fetching geocoding results:", error);
    return [];
  }
}

// Display suggestions in a dropdown below the input
function displaySuggestions(listId, results, targetFieldId, nextField) {
  const suggestionsList = document.getElementById(listId);
  suggestionsList.innerHTML = ""; // Clear previous suggestions

  results.forEach((feature) => {
    const suggestionItem = document.createElement("li");
    suggestionItem.textContent = feature.place_name; // Display place name
    suggestionItem.addEventListener("click", () => {
      document.getElementById(targetFieldId).value = feature.place_name;

      // Check if it's the location field and set coordinates
      if (targetFieldId === "location") {
        const [longitude, latitude] = feature.geometry.coordinates;
        document.getElementById("latitude").value = latitude;
        document.getElementById("longitude").value = longitude;
      }

      suggestionsList.innerHTML = ""; // Clear suggestions
    });
    suggestionsList.appendChild(suggestionItem);
  });

  // Show or hide the dropdown
  const isVisible = results.length > 0;
  suggestionsList.style.display = isVisible ? "block" : "none";
}

document.getElementById("listingForm").addEventListener("submit", (e) => {
  const country = document.getElementById("country").value.trim();
  const location = document.getElementById("location").value.trim();
  const latitude = document.getElementById("latitude").value.trim();
  const longitude = document.getElementById("longitude").value.trim();

  // If the user is editing (previous values exist), don't prevent submission
  // However, if the user hasn't provided valid latitude or longitude when changing location or country, prevent submission
  if (
    (country !== previousCountryValue || location !== previousLocationValue) &&
    (!latitude || !longitude) // Latitude and longitude are required if location or country changes
  ) {
    e.preventDefault(); // Prevent form submission
    alert("Please enter valid country, location, and coordinates");
  }
});
