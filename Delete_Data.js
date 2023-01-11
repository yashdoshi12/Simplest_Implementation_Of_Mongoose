const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
mongoose.connect('mongodb://127.0.0.1:27017/Shop');

const ProductSchema = new mongoose.Schema({name: String, Prod_id: Number});

const ProductModel = mongoose.model('Prod_List', ProductSchema);

ProductModel.deleteOne({ prod_id: 02 })
    .then(() => console.log("Product deleted!"))
    .catch(error => console.log(error));
