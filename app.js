const express = require('express');
const app = express();
const path = require('path');
// Route: Home Page
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname,'square.html'));
});
app.get('/about', (req, res) => {
res.send('About Page');
});
app.get('/contact', (req, res) => {
res.send('Contact Page');
});