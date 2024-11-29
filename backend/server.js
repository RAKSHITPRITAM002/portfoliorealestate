const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware for parsing request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (your front-end)
app.use(express.static(path.join(__dirname, 'public')));

// Basic endpoint to check if server is working
app.get('/', (req, res) => {
  res.send('Backend server is working!');
});

// API endpoint to handle form submissions (Contact Us form)
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Here, you can add logic to save the data or send emails (e.g., using Nodemailer)
  console.log('Message received:', name, email, message);
  res.json({ status: 'success', message: 'Message sent successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
