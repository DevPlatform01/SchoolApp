//request statement for mongoose here
const mongoose = require('mongoose');

//create a class model with the fields that will go to a class.
var Classes = mongoose.model('Classes', 
{
    className:{type: String},
    Description: {type: String},
    Duration:{type: String},
    PassRate: {type: String} 

});

module.exports = {Classes};