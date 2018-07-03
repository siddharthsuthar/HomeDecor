const mongoose = require('mongoose');

const ItemsSchema =mongoose.Schema({
    Item_id:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    path:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Items', ItemsSchema, 'Items');

