var express = require('express');
var router = express.Router();
var UserDetails = require('../models/UserDetails');
/* GET users listing. */
router.post('/', function(req, res, next) {
    var newUser = new UserDetails();

    newUser.user_id = req.body.user_id;
    newUser.first_name = req.body.first_name;
    newUser.last_name = req.body.last_name;
    newUser.email = req.body.email;
    newUser.password = req.body.password;

    newUser.save(function(err) {
        if (err){
            res.send(err);
        }
        console.log(req.body);
        res.status(200).send();
    });

});

module.exports = router;
