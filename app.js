// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define the port
const port = 8080;

// Define a route that handles GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
