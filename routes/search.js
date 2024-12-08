const express = require('express');
const db = require('../models/db');

const router = express.Router();

// Render the cuisine search form
router.get('/', (req, res) => {
    res.render('searchByCuisine', { restaurants: null, error: null });
});

// Handle cuisine search
router.post('/', async (req, res) => {
    const { cuisine } = req.body;

    if (!cuisine || cuisine.trim() === '') {
        return res.render('searchByCuisine', { restaurants: null, error: 'Cuisine type is required.' });
    }

    try {
        const restaurants = await db.getRestaurantsByCuisine(cuisine);
        res.render('searchByCuisine', { restaurants, error: null });
    } catch (err) {
        res.render('searchByCuisine', { restaurants: null, error: 'Unable to fetch restaurants. Please try again later.' });
    }
});

module.exports = router;
