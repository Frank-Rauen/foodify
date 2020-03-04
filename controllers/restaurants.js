const Restaurant = require('../models/restaurant');

module.exports = {
    create,
    index,
    getFeatured
};

async function getFeatured(req, res) {
    try {
        const featuredRestaurants =  await Restaurant.find({})
        .sort('-createdAt').limit(3).populate('addedBy');
        res.json({featuredRestaurants});
    } catch (error) {
        res.status(400).json({err: 'Bad Request'});
    }
}

async function create(req, res) {
    try {
        const restaurant = await Restaurant.create(req.body);
        res.json({restaurant});
    } catch (error) {
        res.status(401).json({err: 'Request Unauthorized'});
    }
}

async function index(req, res) {
    try {
        const restaurants = await Restaurant.find({})
        .sort('-createdAt').populate('addedBy'); 
        res.json({restaurants})
    } catch (error) {
        res.status(401).json({err: 'Request Unauthorized'});
    }
}