const express = require('express');
const db = require('../models/db');
const router = express.Router();

// Render the form
router.get('/', (req, res) => {
    res.render('form', { restaurants: null, error: null });
});

// Handle form submission
router.post('/search', async (req, res) => {
    const { page, perPage, borough } = req.body;

    // Validate form inputs
    if (!page || isNaN(page) || page <= 0) {
        return res.render('form', { restaurants: null, error: 'Page must be a positive number.' });
    }
    if (!perPage || isNaN(perPage) || perPage <= 0) {
        return res.render('form', { restaurants: null, error: 'PerPage must be a positive number.' });
    }
    try {
        const restaurants = await db.getAllRestaurants(+page, +perPage, borough);
        res.render('form', { restaurants, error: null });
    } catch (err) {
        res.render('form', { restaurants: null, error: 'Unable to fetch restaurants. Please try again later.' });
    }
});
module.exports = router;
