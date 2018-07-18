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
    newItem.quantity = req.body.quantity;

    newItem.save(function(err) {
        if (err){
            res.send(err);
        }
        console.log(req.body);
        res.status(200).send();
    });

});

router.get('/:Item_Id',function (req,res,next) {

    Items.find(req.params.user_id, function (err,item) {
        if(err){
            res.status(404).send({"message":"Item not found"});
        }
        else{
            res.status(200).send(item);
        }
    })
})


router.get('/Items', function (req,res,next) {

    Items.find(function (err,item) {
        if(err){
            res.status(404).send({"message": "No Items"});
        }
        else{
            res.status(200).send(item);
        }
    })


})
module.exports = router;