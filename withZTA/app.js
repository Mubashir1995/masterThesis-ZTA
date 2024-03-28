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

// Basic CSS styling
const basicStyle = `
    body { font-family: Arial, sans-serif; }
    h1 { color: #333; }
    form { margin-bottom: 20px; }
    input[type="text"], input[type="password"], button { margin-top: 10px; }
    button { padding: 5px 10px; background-color: #007bff; color: #fff; border: none; cursor: pointer; }
    button:hover { background-color: #0056b3; }
    a { color: #007bff; text-decoration: none; }
    a:hover { text-decoration: underline; }
`;

// Route for root page
app.get('/', (req, res) => {
    res.send(`
        <style>${basicStyle}</style>
        <h1>Welcome to the Login System Using Zero-Trust Security</h1>
        <h2>Master Thesis Implementation By: Syed Mashir Abbas & Mubashir Ali</h2>
        <p>Register or login to access the protected page.</p>
        <a href="/register">Register</a> | <a href="/login">Login</a>
    `);
});

// Route to render the registration form
app.get('/register', (req, res) => {
    res.send(`
        <style>${basicStyle}</style>
        <h1>Register</h1>
        <form action="/register" method="post">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Register</button>
        </form>
        <br>
        <a href="/">Back to Home</a>
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
        res.send('Registration successful. <a href="/login">Login</a>');
    }
});

// Route to render the login form
app.get('/login', (req, res) => {
    res.send(`
        <style>${basicStyle}</style>
        <h1>Login</h1>
        <form action="/login" method="post">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        <br>
        <a href="/">Back to Home</a>
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
        // Redirect to protected page with token in query parameter
        res.redirect(`/protected?token=${token}`);
    } else {
        res.status(401).send(`
            <style>${basicStyle}</style>
            Invalid username or password. <a href="/login">Try again</a>
        `);
    }
});

// Route to access protected resources
app.get('/protected', verifyToken, (req, res) => {
    jwt.verify(req.token, secretKey, (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.send(`
                <style>${basicStyle}</style>
                <h1>Protected Page</h1>
                <p>Welcome, ${authData.username}!</p>
                <p>This is a protected page accessible only with a valid token.</p>
                <form action="/logout" method="post">
                    <button type="submit">Logout</button>
                </form>
            `);
        }
    });
});

// Route for user logout
app.post('/logout', (req, res) => {
    // Redirect to home page and invalidate the token
    res.redirect('/');
});

// Verify JWT token middleware
function verifyToken(req, res, next) {
    // Get token from query parameter
    const token = req.query.token;
    // Check if token exists
    if (token) {
        // Set the token in request object
        req.token = token;
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