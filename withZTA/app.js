// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// Create an instance of Express
const app = express();

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// In-memory storage for user data (replace this with a database in a real-world application)
let users = [];

// Secret key for JWT
const secretKey = 'your_secret_key';

// Route to render the registration form
app.get('/register', (req, res) => {
    res.send(`
        <h1>Register</h1>
        <form action="/register" method="post">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Register</button>
        </form>
    `);
});

// Route to handle user registration
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Check if the username is already taken
    if (users.some(user => user.username === username)) {
        res.send('Username already exists');
    } else {
        // Add the new user to the list (replace this with database insertion in a real-world application)
        users.push({ username, password });
        res.send('Registration successful');
    }
});

// Route to render the login form
app.get('/login', (req, res) => {
    res.send(`
        <h1>Login</h1>
        <form action="/login" method="post">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    `);
});

// Route to handle user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Check if the username and password match any user in the list
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        // Generate JWT token
        const token = jwt.sign({ username }, secretKey);
        res.json({ token });
    } else {
        res.status(401).send('Invalid username or password');
    }
});

// Route to access protected resources
app.get('/protected', verifyToken, (req, res) => {
    jwt.verify(req.token, secretKey, (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.send('Welcome to the protected route, ' + authData.username);
        }
    });
});

// Verify JWT token middleware
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
