const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Route to create the product and add that to the database
router.post('/products/create' , function(req,res){
    let name = req.body.name ;
    let quantity = parseInt(req.body.quantity) ;

    Product.create({ name , quantity }).then(function(data){
        console.log(data);
        res.json({
            "data" : data
        })
    }).catch(function(err){
        console.log(err);
    })
   
    
});

// Route to return JSON data of all the products
router.get('/products' , function(req,res){
    
    Product.find({}).then(function(data){
        res.json(data)
    }).catch(function(err){
        console.log(err);
    })
});


// Route to delete a particular Product
router.delete('/products/:id' , function(req,res){
    let id = req.params.id;
    Product.deleteOne({_id : id}).then(function(){
        console.log("It was Deleted");
        res.json({
            data:{
                messgae : " The Product was Deleted Successfully"
            }
        })
    }).catch(function(err){
        console.log(err);
    })
})

// Route to update the Quantity of a particular product.
router.post('/products/:id/update_quantity/:number' , function(req,res){
    let id = req.params.id;
    let number = parseInt(req.params.number);
    Product.findOneAndUpdate({_id : id} , {$set : { quantity : number }})
    .then(function(data){
        console.log(data);
        res.json({data : data , message : " Updated The Product"});
    }).catch(function(err){
        console.log(err);
    })
})


module.exports = router;