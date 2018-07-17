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
<<<<<<< HEAD
    console.log("---------");
    console.log(newUser);
    console.log("------ddd---");

    newUser.save(function(err){
      if(err){
        //  res.json({msg: 'Failed to add details'}).send();
        res.send(err);
      }
      else{
          //res.json({msg: 'details added asuccesfully'}).send();
        res.status(200).send();
      }

  });

   
=======

    newUser.save(function(err) {
        if (err){
            res.send(err);
        }
        console.log(req.body);
        res.status(200).send();
    });

>>>>>>> d8fc1204af44d5ff791c09e7c04dff71abe31d8c
});

module.exports = router;
