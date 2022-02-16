const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//import the model for an organization
const Organization = require('./models/organization.js');

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
        title: req.body.orgName,
        email: req.body.email,
        username: req.body.username,
        password: req.body.pwd,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    console.log(org);
    org.save().then(createdOrg => {
        res.status(201).json({
            message: 'Organization added to database',
            orgId: createdOrg._id
        });
    });
});

module.exports = app;