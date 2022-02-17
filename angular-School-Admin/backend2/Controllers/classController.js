//Implement Router from Express here.
const { json } = require('body-parser');
const express = require('express');
let router = express.Router();

let {Class} = require('../models/class');//Stores class info from the class.js model

//Retrieve classes from the class model using router
router.get('/', (req, res) =>
{
    // This retrieces all the classes from the class collection in Mongodb
    Class.find((err, docs) =>
    {
        //Check to see if we have any errors retrieving classes. 
        if(!err)
        {
            res.send(docs)
        } else
        {
            console.log('Error in retrieving Classes :' + json.stringify(err, underfined, 2));
        }
    });
});

//Then obviously export the router
module.exports = router;
//We will then request in index.Js