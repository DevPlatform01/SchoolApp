const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//import the model for an organization
const Organization = require('./models/organization.js');
const Class = require('./models/class.js');

const app = express();

// connect to the database
mongoose.connect('mongodb+srv://SA:AlexKwanele@school-app.qc8me.mongodb.net/AdminDB?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to database!');
    })
    .catch(() => {
        console.log('Connection failed!');
    });

app.use(bodyParser.json());

// allow requests
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

// organization register route, gets values from form, then save to database as an organization object
app.post("/register", (req, res, next) => {
    const org = new Organization({
        title: req.body.title,
        email: req.body.email,
        username: req.body.username,
        password: req.body.pwd,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    org.save().then(createdOrg => {
        res.status(201).json({
            message: 'Organization added to database',
            orgId: createdOrg._id
        });
    });
    const newClass = new Class({
        className: req.body.title + '-class'
    });
    newClass.save().then(console.log('class created!'));
});

// verify login
app.post("/org-login", (req, res, next) => {
    // get user information from login form
    const user = {
        username: req.body.username,
        pwd: req.body.pwd
    }

    // see if user exists in database
    Organization.findOne({ 'username': user.username }).then(selectedUser => {
        if(selectedUser) {
            res.status(200).json(selectedUser.title);
        } else {
            res.status(404).json({message: 'User not found!'});
        }
    });
})

module.exports = app;