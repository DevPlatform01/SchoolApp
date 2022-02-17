//request statement for mongoose here
const mongoose = require('mongoose');

//create a class model with the fields that will go to a class.
let Class = mongoose.model('Class', 
{
    className:{type: String},
    Description: {type: String},
    Duration:{type: String},
    PassRate: {type: Number} 

});

module.exports = {Class};