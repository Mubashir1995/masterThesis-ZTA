# Zero Trust Security Models Comparison

This repository contains two Node.js applications that demonstrate the implementation of a basic login and registration system with and without Zero Trust Security principles. The applications showcase different authentication mechanisms and serve as a comparison to evaluate the effectiveness and usability of Zero Trust Security.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js version 19.4.0
- npm (Node Package Manager) version 9.2.0

## Setup Instructions

### Windows

1. **Download Node.js and npm:**
   - Download and install Node.js and npm from the official website: [Node.js Downloads](https://nodejs.org/en/download/)

2. **Clone the Repository:**
   - Open Command Prompt (cmd) and navigate to the directory where you want to clone the repository.
   - Run the following command to clone the repository:
     ```
     git clone https://github.com/Mubashir1995/masterThesis-ZTA.git
     ```

3. **Install Dependencies:**
   - Navigate to the project directory:
     ```
     cd masterThesis-ZTA
     ```
   - Install dependencies using npm:
     ```
     npm install
     ```

4. **Run the Application:**
   - Start the server:
     ```
     node app.js
     ```
   - Open a web browser and visit `http://localhost:3000` to access the application.

### macOS

1. **Download Node.js and npm:**
   - Download and install Node.js and npm using Homebrew:
     ```
     brew install node@19.4.0
     ```

2. **Clone the Repository:**
   - Open Terminal and navigate to the directory where you want to clone the repository.
   - Run the following command to clone the repository:
     ```
     git clone https://github.com/Mubashir1995/masterThesis-ZTA.git
     ```

3. **Install Dependencies:**
   - Navigate to the project directory:
     ```
     cd masterThesis-ZTA
     ```
   - Install dependencies using npm:
     ```
     npm install
     ```

4. **Run the Application:**
   - Start the server:
     ```
     node app.js
     ```
   - Open a web browser and visit `http://localhost:3000` to access the application.


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


