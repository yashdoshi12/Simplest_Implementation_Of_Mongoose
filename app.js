const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
mongoose.connect('mongodb://127.0.0.1:27017/Shop');

const ProductSchema = new mongoose.Schema({name: String, Prod_id: Number});

const ProductModel = mongoose.model('Prod_List', ProductSchema);

const Product_1 = new ProductModel({ name: 'Laptop', Prod_id: 01});
const Product_2 = new ProductModel({ name: 'Mobile', Prod_id: 02});
const Product_3 = new ProductModel({ name: 'SmartWatch', Prod_id: 03});

ProductModel.insertMany([Product_1, Product_2, Product_3], function(err){
    if(err){console.log(err);}
    else{console.log("Saved!");}
});

//New_Product.save().then(() => console.log('Saved!'));
