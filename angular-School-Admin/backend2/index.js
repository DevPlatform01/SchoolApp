const express = require('express');
const bodyparser = require('body-parser');

const {mongoose} = require('./db.js'); //This helps establish the mongodb connection. 
let classController = require('./Controllers/classController');

let app = express(); //Starting to work with express

app.use(bodyparser.json()); //This will config our express

// launch the server
app.listen(8000, () => console.log('Server started at port: 8000'));

app.use('/Classes', classController);
