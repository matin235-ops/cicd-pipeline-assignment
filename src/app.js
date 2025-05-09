const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import and use routes
app.use('/api', routes());

module.exports = app;