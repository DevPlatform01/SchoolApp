const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//import routes
const orgRoutes = require("./routes/org");

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

// routes for handling organization requests
app.use("/api/organizations", orgRoutes);

module.exports = app;