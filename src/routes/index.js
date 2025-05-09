const express = require('express');
const router = express.Router();

// Define a simple route
router.get('/', (req, res) => {
    res.send('Welcome to the CI/CD Pipeline Assignment!');
});

// Export the router
module.exports = router;