const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import and use routes
app.use('/api', routes());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the CI/CD Pipeline Demo!' });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

module.exports = app;