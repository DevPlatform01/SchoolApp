const mongoose = require('mongoose');

// create a schema for a class.
const classSchema = mongoose.Schema({
    className: { type: String, require: true }
});

module.exports = mongoose.model('Class', classSchema);