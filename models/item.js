const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: Object,
        required: true,
        x:{
            type: Number,
            required: true
        },
        y:{
            type: Number,
            required: true
        }
    }
});

module.exports = mongoose.model('Item', itemSchema);