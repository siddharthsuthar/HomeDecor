var express = require('express');
var router = express.Router();
var Items = require('../models/Items');


/* Post item details */

router.post('/', function(req, res, next) {


    var newItem = new Items();

    newItem.Item_id = req.body.Item_id;
    newItem.price = req.body.price;
    newItem.path = req.body.path;
    newItem.description = req.body.description;


    newItem.save(function(err) {
        if (err){
            res.send(err);
        }
        console.log(req.body);
        res.status(200).send();
    });

});


module.exports = router;