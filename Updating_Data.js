const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
mongoose.connect('mongodb://127.0.0.1:27017/Shop');

const ProductSchema = new mongoose.Schema({name: String, Prod_id: Number});

const ProductModel = mongoose.model('Prod_List', ProductSchema);

ProductModel.updateOne(
    { prod_id: 01 }, 
    { $set: { name: 'TV' } }, 
    function(error) {
      if (error) {
        console.log(error);
      } else {
        console.log("Product updated!");
      }
    }
);
