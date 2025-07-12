Library Management System

This is a full-stack Library Management System project where users can:

View all books

Add new books

Edit existing books

Technology Used:

React (frontend)

Node.js + Express (backend)

MongoDB (database)

Axios (HTTP client)

React Router DOM (routing)

Project Folder Structure:

client → frontend code (React)

server → backend code (Node.js & MongoDB)

Frontend Setup (client folder):

Go to the client folder

Run: npm install to install dependencies

Run: npm start to start the React development server

The frontend runs on: http://localhost:3000

Backend Setup (server folder):

Go to the server folder

Run: npm install to install backend dependencies

Create a file named .env in the server folder

Inside .env, add:

PORT=5000
MONGO_URI=your_mongodb_connection_string

Run: node server.js to start the backend server

The backend runs on: http://localhost:5000

API Endpoints:

GET /books → fetch all books

GET /books/:id → fetch book by ID

POST /books → add a new book

PUT /books/:id → update a book

DELETE /books/:id → delete a book (optional)

Extra Notes:

Connect MongoDB using MongoDB Atlas (cloud) or local MongoDB

Use .env file to keep MongoDB URI secure

Axios is used in frontend to connect to backend

React Router is used for navigation between Add, Edit, and List pages

