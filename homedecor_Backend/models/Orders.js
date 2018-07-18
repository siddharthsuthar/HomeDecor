var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var OrderSchema   = new Schema({
    order_id:{
        type: String,
        required: true
    },
    items: Array,
    invoice:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Order', OrderSchema, 'Order');
