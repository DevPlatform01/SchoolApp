
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/AdminDB', (err)=>
{
    if(!err)
    console.log('Connection Succeeded!')
    else
    console.log('Connection failure: ' + JSON.stringify(err, undefined, 2));
});

//export mongoose
module.exports = mongoose;



//Atlas connection string below

// const { MongoClient } = require('mongodb');

// const uri = "mongodb+srv://SA:<AlexKwanele>@school-app.qc8me.mongodb.net/School-App?retryWrites=true&w=majority";

// const client = new MongoClient(uri, 
//     { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err =>
//  {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
