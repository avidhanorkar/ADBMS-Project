# Product Store MERN App

This is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to manage products. Users can create, view, update, and delete products through a user-friendly interface. The app demonstrates CRUD (Create, Read, Update, Delete) operations with MongoDB and is built with a REST API backend.

## Features

- Add new products
- View a list of products
- Update existing products
- Delete products
- Responsive design
- REST API integration

## Tech Stack

- **MongoDB**: NoSQL database for storing product data
- **Express.js**: Backend framework for handling API requests
- **React.js**: Frontend framework for building the user interface
- **Chakra UI**: React Component library for building the user interface
- **Node.js**: JavaScript runtime for the backend

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/product-store-mern-app.git
    ```

2. Install server dependencies:

    ```bash
    cd backend
    npm install
    ```

3. Install frontend dependencies:

    ```bash
    cd frontend
    npm install
    ```

4. Create a `.env` file in the root of the backend folder with the following variables:

    ```bash
    MONGO_URI=<your_mongodb_connection_string>
    PORT=5000
    ```

5. Start the backend and frontend servers:

    For backend:
    ```bash
    cd backend
    npm run server
    ```

    For frontend:
    ```bash
    cd frontend
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```bash
├── backend
│   ├── controllers  # API route handlers
│   ├── models       # Mongoose models
│   ├── routes       # Express routes
│   └── server.js    # Server entry point
├── frontend
│   ├── public       # Static files
│   ├── src
│   │   ├── components  # React components
│   │   ├── pages       # Page components
│   │   ├── services    # API services
│   │   └── App.js      # Main React app
└── README.md
# ADBMS-Project
