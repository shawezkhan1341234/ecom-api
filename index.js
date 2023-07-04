const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');


// Setting up all the middlewares
app.use(express.json());
app.use(express.urlencoded())


// Routes
app.use('/' , require('./routes'));


// Setting up the Server
app.listen(port, function(err){
    if(err){
        console.log(err);
    }
    console.log("Ther Server is Running Successfully");
})

