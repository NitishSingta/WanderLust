# Routes Folder Documentation

This folder contains all Express route modules for the WanderLust application. Each file defines routes for a specific resource and connects HTTP requests to controller logic.

## Files

- **listing.js**  
  Handles all routes for listings (accommodations).

  - `GET /listings`: List all listings.
  - `POST /listings`: Create a new listing (requires authentication, image upload, validation).
  - `GET /listings/new`: Render form to create a new listing.
  - `GET /listings/:id`: Show details for a single listing.
  - `PUT /listings/:id`: Update a listing (requires authentication, ownership, image upload, validation).
  - `DELETE /listings/:id`: Delete a listing (requires authentication and ownership).
  - `GET /listings/:id/edit`: Render form to edit a listing (requires authentication and ownership).

- **review.js**  
  Handles review routes for listings.

  - `POST /listings/:id/reviews`: Add a review to a listing (requires authentication and validation).
  - `DELETE /listings/:id/reviews/:reviewId`: Delete a review (requires authentication and author ownership).

- **user.js**  
  Handles user authentication routes.
  - `GET /signup`: Render signup form.
  - `POST /signup`: Register a new user.
  - `GET /login`: Render login form.
  - `POST /login`: Authenticate user and log in.
  - `GET /logout`: Log out the current user.

## Usage

- Each route file uses Express Router for modularity.
- Middleware is used for authentication, authorization, and validation.
- Controllers are imported from the `controllers/` directory for separation of concerns.
- Utility functions like `wrapAsync` handle errors in async route handlers.

## Extending

- Add new route files for additional resources as needed.
- Use middleware for security and validation.
- Keep controller logic in the `controllers/` directory
