# MERN Stack E-commerce Application

This is a full-fledged e-commerce application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to browse products, add items to their cart, and complete the checkout process. It also includes an admin panel for managing products and orders.

## Features

- User authentication and authorization
- Product listing and detailed views
- Shopping cart functionality
- Order management
- Admin panel for managing products and orders
- Responsive design for mobile and desktop

## Tech Stack

### Frontend

- React.js
- Styled Components for styling

### Backend

- Node.js
- Express.js
- MongoDB Atlas (Cloud MongoDB) for the database

## Installation

### Prerequisites

- Node.js installed on your machine
- MongoDB Atlas account for the database

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/mern-ecommerce.git
   cd mern-ecommerce
   ```

2. **Install dependencies**

   ```bash
   # For the backend
   cd backend
   npm install

   # For the frontend
   cd ../frontend
   npm install
   ```

3. **Setup environment variables**

   Create a `.env` file in the `backend` directory and add the following variables:

   ```env
   PORT=5000
   MONGO_URI=your-mongodb-atlas-connection-string
   JWT_SECRET=your-jwt-secret
   ```

4. **Run the application**

   ```bash
   # Start the backend server
   cd backend
   npm start

   # Start the frontend server
   cd ../frontend
   npm start
   ```

   The backend server will run on `http://localhost:5000` and the frontend on `http://localhost:3000`.

## Project Structure

### Backend

- **controllers/**: Contains the business logic for handling requests.
- **models/**: Defines the MongoDB schemas.
- **routes/**: Contains the route definitions.
- **middleware/**: Middleware for authentication, error handling, etc.
- **config/**: Configuration files (e.g., database connection).

### Frontend

- **src/components/**: Reusable React components.
- **src/pages/**: Pages corresponding to different routes.
- **src/styles/**: Styled Components for CSS-in-JS styling.
- **src/context/**: Context API setup for state management.

## Usage

### User

- **Register/Login**: Users can create an account or login to an existing account.
- **Browse Products**: View the list of products and detailed views.
- **Add to Cart**: Add products to the shopping cart.
- **Checkout**: Complete the purchase process.

### Admin

- **Manage Products**: Add, edit, or delete products.
- **Manage Orders**: View and manage customer orders.

## Contributing

Contributions are welcome! Please create a pull request or open an issue to discuss the changes you would like to make.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Styled Components](https://styled-components.com/)
