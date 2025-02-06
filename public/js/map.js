const API_KEY = maptilerApiKey;
const map = new maplibregl.Map({
  container: "map", // container's id or the HTML element in which SDK will render the map
  style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
  center: [longitude || 77.62, latitude || 30.45], // Longitude, Latitude
  zoom: 9,
});

const marker = new maplibregl.Marker({ color: "red" })
  .setLngLat([longitude, latitude])
  .addTo(map);

// Create a popup with your content
const popup = new maplibregl.Popup({ offset: 10, closeButton: false }).setHTML(
  `<h5>${title}</h5><p>Exact location provided after booking.</p>`
);

// Show the popup on hover
marker
  .getElement()
  .addEventListener("mouseenter", () =>
    popup.addTo(map).setLngLat([longitude, latitude])
  );
marker.getElement().addEventListener("mouseleave", () => popup.remove());
