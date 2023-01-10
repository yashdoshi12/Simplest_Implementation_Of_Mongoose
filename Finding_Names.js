const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
mongoose.connect('mongodb://127.0.0.1:27017/Shop');

const ProductSchema = new mongoose.Schema({name: String, Prod_id: Number});

const ProductModel = mongoose.model('Prod_List', ProductSchema);

ProductModel.find(function(err, Prod_List) {
    if(err){console.log(err);}
    else{
        Prod_List.forEach(function(prod){console.log(prod.name);});
        mongoose.connection.close();
    }
});
