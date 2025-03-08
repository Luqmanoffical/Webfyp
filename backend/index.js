const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;
require("dotenv").config();
// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

// Another example route (GET request)
app.get('/about', (req, res) => {
  res.json({
    message: 'Welcome to the About Page',
    description: 'This is a simple Node.js app built with Express.',
  });
});

// Post request example (handling data from client)
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and Email are required!' });
  }
  res.status(200).json({ message: 'Data received successfully', data: { name, email } });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
