// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage for user data
let users = [];

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
        // Add the new user to the list
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
        res.send('Login successful');
    } else {
        res.send('Invalid username or password');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
