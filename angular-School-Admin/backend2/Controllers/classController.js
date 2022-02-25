//Implement Router from Express here.
const express = require('express');
let router = express.Router();

let {Classes} = require('../models/class');//Stores class info from the class.js model

//Retrieve classes from the class model using router
router.get('/', (req, res) =>
{
    // This retrieces all the classes from the class collection in Mongodb
    Classes.find((err, docs) =>
    {
        //Check to see if we have any errors retrieving classes. 
        if(!err){res.send(docs);}
        else{console.log('Error: ' + JSON.stringify(err, undefined,2));}

    });
});

//Insert new class in classes
router.post('/', (req, res) =>
{
    let cls = new Classes(
    {
        className: req.body.className,
        Description: req.body.Description,
        Duration: req.body.Duration,
        PassRate: req.body.PassRate
    });

    cls.save((err, docs) => 
    {
        if(!err){res.send(docs)}
        else{console.log('error saving Class: ' + JSON.stringify(err, undefined, 2));}
    });
});

//Then obviously export the router
module.exports = router;
//We will then request in index.Js