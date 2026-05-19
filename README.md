# Smart Leads Dashboard

A Full Stack Lead Management Dashboard built using React, TypeScript, Node.js, Express, MongoDB, JWT Authentication, and TailwindCSS.

---

# Features Implemented

## Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Logout Functionality

## Lead Management

* Add Lead
* Edit Lead
* Delete Lead
* Fetch Leads

## Dashboard Features

* Debounced Search
* Status Filter
* Source Filter
* Sorting (Latest/Oldest)
* Pagination
* CSV Export

## Additional Features

* Role-Based Access Control (Admin/Sales)
* Loading States
* Error Handling
* Responsive UI
* Environment Variable Support
* Docker Setup

---

# Tech Stack

## Frontend

* React
* TypeScript
* TailwindCSS
* Axios
* React CSV

## Backend

* Node.js
* Express.js
* TypeScript
* MongoDB
* Mongoose
* JWT
* bcryptjs

---

# Folder Structure

client/

* components/
* pages/
* layouts/
* services/

server/

* controllers/
* routes/
* models/
* middleware/
* config/

---

# Demo Credentials

Admin Login

Email: aditya@gmail.com

Password: 123456

---

# Frontend Setup

cd client

npm install

npm run dev

---

# Backend Setup

cd server

npm install

npm run dev

---

# Environment Variables

Create `.env` inside server folder:

PORT=5000

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_secret_key

---

# API Documentation

## Authentication APIs

### Register User

POST /api/auth/register

Request Body:

{
"name": "Aditya",
"email": "[aditya@test.com](mailto:aditya@test.com)",
"password": "123456",
"role": "admin"
}

---

### Login User

POST /api/auth/login

Request Body:

{
"email": "[admin@test.com](mailto:admin@test.com)",
"password": "admin123"
}

---

## Lead APIs

### Get All Leads

GET /api/leads

---

### Create Lead

POST /api/leads

Request Body:

{
"name": "Rahul",
"email": "[rahul@gmail.com](mailto:rahul@gmail.com)",
"status": "Qualified",
"source": "Instagram"
}

---

### Update Lead

PUT /api/leads/:id

---

### Delete Lead

DELETE /api/leads/:id

---

# Docker Setup

Dockerfile added inside server folder.

---

# Deployment

Frontend can be deployed on:

* Vercel

Backend can be deployed on:

* Render

MongoDB:

* MongoDB Atlas

---

# Evaluation Features Covered

* TypeScript Usage
* Proper Folder Structure
* Validation
* Reusable Components
* API Design
* Loading/Error States
* Debounced Search
* CSV Export
* Role-Based Access Control
* Scalability
* Responsive UI

# Demo Video

Click below to watch the project demo recording:



https://github.com/user-attachments/assets/5430eb7c-a10e-48d2-8879-7cca4fe6fb1b

