var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserOrderSchema   = new Schema({
    user_id : {type:String,
    required: true},
    past_order:Array,
    cart:Array
});

module.exports = mongoose.model('UserOrder', UserOrderSchema, 'UserOrder');
