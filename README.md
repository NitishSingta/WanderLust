# WanderLust

WanderLust is a full-stack web application for listing and reviewing travel accommodations, inspired by Airbnb.

## Features

- User authentication (signup, login, logout)
- Create, edit, and delete listings with image upload (Cloudinary)
- Geocoding and autocomplete for location fields (MapTiler)
- Interactive map display for listings
- Add and delete reviews for listings
- Flash messages for feedback
- Responsive UI with Bootstrap

## Project Structure

- `app.js`: Main Express app, sets up middleware, routes, sessions, Passport, error handling.
- `models/`: Mongoose schemas for Listing, Review, and User.
- `controllers/`: Route handlers for listings, reviews, and users.
- `routes/`: Express routers for listings, reviews, and users.
- `views/`: EJS templates for all pages.
- `public/`: Static assets (CSS, JS).
- `utils/`: Utility modules (error handling, async wrapper).
- `init/`: Database seeding scripts.

## Setup

1. Clone the repository.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   ATLASDB_URL=<your_mongodb_connection_string>
   SECRET=<your_session_secret>
   CLOUD_NAME=<your_cloudinary_cloud_name>
   CLOUD_API_KEY=<your_cloudinary_api_key>
   CLOUD_API_SECRET=<your_cloudinary_api_secret>
   MAPTILER_API_KEY=<your_maptiler_api_key>
   ```
4. Seed the database (optional, for local development):
   ```sh
   node init/index.js
   ```
5. Start the server:
   ```sh
   node app.js
   ```
6. Visit [http://localhost:8080](http://localhost:8080) in your browser.

## Usage

- Sign up for an account.
- Create new listings with images and geocoded locations.
- Edit or delete your own listings.
- Leave reviews on listings.
- View listings on an interactive map.

## Technologies

- Node.js, Express, MongoDB, Mongoose
- Passport.js (authentication)
- Cloudinary (image storage)
- MapTiler (maps & geocoding)
- Bootstrap, EJS

## License
