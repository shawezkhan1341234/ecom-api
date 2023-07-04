const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/ecommerce');

const db = mongoose.connection;

db.on('error',console.error.bind(console, "There is an Error connecting"));
db.once('open',function(){
    console.log("THe connection was succesful");
});