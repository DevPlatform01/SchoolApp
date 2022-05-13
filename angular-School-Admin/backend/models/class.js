const mongoose = require('mongoose');

// create a schema for a class.
const classSchema = mongoose.Schema({
    title: { type: String, require: true },
    desc: { type: String, require: true },
    org: { type: String, require: true}
    // Duration: { type: String, require: true },
    // PassRate: { type: String, require: true }
});

module.exports = mongoose.model('Class', classSchema);