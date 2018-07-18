var express = require('express');
var router = express.Router();
var Orders = require('../models/Orders');
/* GET users listing. */
router.post('/', function(req, res, next) {

    var newOrder = new Orders();

    newOrder.order_id = req.body.order_id;
    newOrder.items = req.body.items;
    newOrder.invoice = req.body.invoice;

    newOrder.save(function(err) {
        if (err){
            res.send(err);
        }
        console.log(req.body);
        res.status(200).send();
    });

});

router.get('/:order_id',function (req,res,next) {

    UserDetails.find(req.params.order_id, function (err,order) {
        if(err){
            res.status(404).send({"message":"order not found"});
        }
        else{
            res.status(200).send(order);
        }
    })
})




module.exports = router;
