# Ecommerce API

This project implements a simple e-commerce API using Node.js and MongoDB. It allows you to manage product inventory, including adding, listing, updating quantities, and deleting products.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- Add new products with names and quantities.
- List all existing products.
- Delete products by ID.
- Update product quantities (with automatic deletion if quantity goes to or below 0).

## Tech Stack

- <a href="https://nodejs.org/en/">Node.js</a>
- <a href="https://www.mongodb.com/">MongoDB</a>
- <a href="https://expressjs.com/">Express.js</a>, 

## Getting Started

### Prerequisites

- Node.js and npm installed (Download: https://nodejs.org/)
- MongoDB installed and running (Download: https://www.mongodb.com/try/download/community)

### Installation

1.  Install dependencies: `npm install`
2.  Create a `.env` file in the root directory and add your MongoDB connection URL
3.  Start the server: `npm start`

The server will start on port 8000 or the port you specified in the `.env` file.

## API Endpoints

- **POST /products/create**: Add a new product.
- **GET /products**: List all products.
- **DELETE /products/:id**: Delete a product by ID.
- **POST /products/:id/update_quantity/?number=n**: Update a product's quantity by ID. `n` can be positive or negative.

## Author

This project is done by Prathik Shetty



