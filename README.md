# Zero Trust Security Models Comparison

This repository contains two Node.js applications that demonstrate the implementation of a basic login and registration system with and without Zero Trust Security principles. The applications showcase different authentication mechanisms and serve as a comparison to evaluate the effectiveness and usability of Zero Trust Security.

## Description

### Without Zero Trust Security (withoutZTA)

The `withoutZTA` directory contains a Node.js application that implements a basic login and registration system using traditional authentication mechanisms. It relies on username/password credentials for authentication without additional security measures such as multi-factor authentication or token-based authentication.

### With Zero Trust Security (withZTA)

The `withZTA` directory contains a Node.js application that implements a basic login and registration system with Zero Trust Security principles. It utilizes JSON Web Tokens (JWT) for authentication and authorization, enhancing security by eliminating implicit trust and requiring continuous verification of user identity.

## Purpose

The purpose of this repository is to demonstrate the differences between traditional authentication methods and Zero Trust Security principles in a real-world application scenario. By comparing the two implementations, users can gain insights into the advantages and challenges of adopting Zero Trust Security models in their applications.

## How to Run

### Without Zero Trust Security (withoutZTA)

1. Navigate to the `withoutZTA` directory.
2. Install dependencies using `npm install`.
3. Start the application using `node app.js`.
4. Access the registration page at `http://localhost:3000/register` to create a new user.
5. After registration, visit `http://localhost:3000/login` to log in with the registered user credentials.

### With Zero Trust Security (withZTA)

1. Navigate to the `withZTA` directory.
2. Install dependencies using `npm install`.
3. Start the application using `node app.js`.
4. Access the registration page at `http://localhost:3000/register` to create a new user.
5. After registration, visit `http://localhost:3000/login` to log in with the registered user credentials.

## Additional Details

- Both applications use Express.js as the web framework and store user data in-memory for simplicity. In a real-world scenario, user credentials would be securely stored in a database.
- The `withZTA` application uses JWT (JSON Web Tokens) for authentication, providing a more secure and flexible authentication mechanism compared to traditional methods.
- Feel free to explore and modify the applications to suit your specific requirements or integrate additional security features.

## Contributors

- Syed Mashir Abbas (LTU Master's Thesis)
- Mubashir Ali (LTU Master's Thesis)


