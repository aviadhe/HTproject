const express = require('express');
const router = express.Router();
const Item = require('../models/item');

module.exports = router;

//returnes all items
router.get('/', async (req, res) => {
    try {
        //mongoos returns all objects that match criteria
        const items = await Item.find();
        res.json(items)
    } catch (e) {
        res.status(500).json({ message: err.message })
    }
});

//returns all food items
router.get('/food', async (req, res) => {
    try {
        const items = await Item.find({type:"food"});
        res.json(items)
    } catch (e) {
        res.status(500).json({ message: err.message })
    }
});


//returns all event items
router.get('/event', async (req, res) => {
    try {
        const items = await Item.find({type:"event"});
        res.json(items)
    } catch (e) {
        res.status(500).json({ message: err.message })
    }
});

//add food item
router.post('/food', async (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        type: 'food',
        location: req.body.location,
    });

    try {
        const item = await newItem.save();
        res.status(201).json(item)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

//add event item
router.post('/event', async (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        type: 'event',
        location: req.body.location,
    });

    try {
        const item = await newItem.save();
        res.status(201).json(item)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

module.exports = router;