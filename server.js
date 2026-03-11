/**********************************************************************************
WEB700 – Assignment 04
I declare that this assignment is my own work in accordance with Seneca Academic Policy.
No part of this assignment has been copied manually or electronically from any other source
(including 3rd party web sites) or distributed to other students.
Name: ______________________
Student ID: _________________
Date: __________________
**********************************************************************************/

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from "public"
app.use(express.static('public'));

// Route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});