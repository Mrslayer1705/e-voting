const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/eVoting', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a User model
const User = mongoose.model('User', {
    fullName: String,
    mobileNumber: String,
    email: String,
    age: Number,
    aadhaar: String,
    address: String,
    proofOfAddress: String, // Store file path or URL
    profilePhoto: String // Store file path or URL
});

// API endpoint to register a user
app.post('/register', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send({ message: 'Registration successful!' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
