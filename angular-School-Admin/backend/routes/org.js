const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Organization = require("../models/organization");

const router = express.Router();

router.post("/register", (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const org = new Organization({
                title: req.body.title,
                path: req.body.path,
                email: req.body.email,
                password: hash,
                firstName: req.body.firstName,
                lastName: req.body.lastName
            });
            org.save().then(createdOrg => {
                res.status(201).json({
                    message: 'Organization added to database',
                    result: createdOrg
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
        })
});

// verify login
router.post("/login", (req, res, next) => {
    let fetchedOrg;
    // see if user exists in database
    Organization.findOne({ email: req.body.email })
        .then(selectedOrg => {
            if (!selectedOrg) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            fetchedOrg = selectedOrg;
            return bcrypt.compare(req.body.password, selectedOrg.password);
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            const token = jwt.sign({email: fetchedOrg.email, userId: fetchedOrg._id}, 'secret_this_should_be_longer', {expiresIn: '1hr'});
            res.status(200).json({
                token: token,
                expiresIn: 3600,
                path: fetchedOrg.path
            });
        })
        .catch(err => {
            return res.status(401).json({
                message: 'Auth failed'
            });
        });
})

module.exports = router;