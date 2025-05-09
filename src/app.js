const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the CI/CD Pipeline Demo!' });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

module.exports = app;