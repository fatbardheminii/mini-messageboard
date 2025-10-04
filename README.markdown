# Mini Messageboard

## Overview
A beginner-friendly web app built for The Odin Project's Node.js curriculum. Practice server-side development, routing, templating, and now persistent storage with PostgreSQL.

## Features
- View messages with user names and timestamps.
- Add new messages via a form (with validation).
- Display individual message details.
- Messages are stored in a PostgreSQL database.

## Technologies Used
- Node.js
- Express
- EJS
- CSS
- pg (PostgreSQL client)
- dotenv
- Nodemon

## Getting Started
1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Create a `.env` file in the project root:
   ```
   DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>
   ```
4. Make sure your database has a `messages` table:
   ```sql
   CREATE TABLE IF NOT EXISTS messages (
     id SERIAL PRIMARY KEY,
     text TEXT NOT NULL,
     "user" TEXT NOT NULL,
     added TIMESTAMPTZ DEFAULT NOW()
   );
   ```
5. (Optional) Populate the database: `node db/populatedb.js`
6. Run the server: `npm start`
7. Open `http://localhost:3000` in your browser.
