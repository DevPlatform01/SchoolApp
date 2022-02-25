const mongoose = require('mongoose');

// create a scheme for an organization. Basically what will go into an org
const orgSchema = mongoose.Schema({
    title: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true }
});

module.exports = mongoose.model('Organization', orgSchema);