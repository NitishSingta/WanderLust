## Views Folder Documentation

The `views` folder contains all EJS templates for rendering the frontend of WanderLust. It is organized as follows:

### Structure

- **layouts/**  
  Contains base layout files.

  - `boilerplate.ejs`: Main HTML skeleton. Includes Bootstrap, FontAwesome, custom CSS, and shared components (navbar, flash messages, footer). All other views extend this layout.

- **includes/**  
  Shared partials used across multiple views.

  - `navbar.ejs`: Navigation bar with links for authentication, listing creation, and search.
  - `flash.ejs`: Displays flash messages for success and error feedback.
  - `footer.ejs`: Footer with social links and legal info.

- **listings/**  
  Templates for listing-related pages.

  - `index.ejs`: Shows all listings with filter options.
  - `new.ejs`: Form for creating a new listing, including image upload and location autocomplete.
  - `edit.ejs`: Form for editing an existing listing.
  - `show.ejs`: Detailed view of a single listing, including reviews, owner controls, and map display.

- **users/**  
  User authentication pages.

  - `login.ejs`: Login form.
  - `signup.ejs`: Signup form.

- **error.ejs**  
  Displays error messages for invalid routes or server errors.

### Usage

- All pages extend `layouts/boilerplate.ejs` for consistent styling and structure.
- Shared components (`includes/`) are injected into layouts for DRY code.
- Listing forms (`new.ejs`, `edit.ejs`) support image upload and geocoding.
- Flash messages and error handling are integrated for user feedback.
- The map and autocomplete features use MapTiler APIs.

### Customization

- To change the look and feel, edit `layouts/boilerplate.ejs` and the CSS files in `public/css/`.
- Add new partials to `includes/` for reusable UI elements.
- Extend listing and user templates for additional features as needed.

---

```## Views Folder Documentation

The `views` folder contains all EJS templates for rendering the frontend of WanderLust. It is organized as follows:

### Structure

- **layouts/**
  Contains base layout files.
  - `boilerplate.ejs`: Main HTML skeleton. Includes Bootstrap, FontAwesome, custom CSS, and shared components (navbar, flash messages, footer). All other views extend this layout.

- **includes/**
  Shared partials used across multiple views.
  - `navbar.ejs`: Navigation bar with links for authentication, listing creation, and search.
  - `flash.ejs`: Displays flash messages for success and error feedback.
  - `footer.ejs`: Footer with social links and legal info.

- **listings/**
  Templates for listing-related pages.
  - `index.ejs`: Shows all listings with filter options.
  - `new.ejs`: Form for creating a new listing, including image upload and location autocomplete.
  - `edit.ejs`: Form for editing an existing listing.
  - `show.ejs`: Detailed view of a single listing, including reviews, owner controls, and map display.

- **users/**
  User authentication pages.
  - `login.ejs`: Login form.
  - `signup.ejs`: Signup form.

- **error.ejs**
  Displays error messages for invalid routes or server errors.

### Usage

- All pages extend `layouts/boilerplate.ejs` for consistent styling and structure.
- Shared components (`includes/`) are injected into layouts for DRY code.
- Listing forms (`new.ejs`, `edit.ejs`) support image upload and geocoding.
- Flash messages and error handling are integrated for user feedback.
- The map and autocomplete features use MapTiler APIs.

### Customization

- To change the look and feel, edit `layouts/boilerplate.ejs` and the CSS files in `public/css/`.
- Add new partials to `includes/` for reusable UI elements.
- Extend listing and user templates for additional features as needed.
```
