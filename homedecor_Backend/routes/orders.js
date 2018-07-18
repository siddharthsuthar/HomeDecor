var express = require('express');
var router = express.Router();
var Orders = require('../models/Orders');
/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log("entry");
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

module.exports = router;
