const { Schema, model } = require("mongoose");

const newProduct = new Schema({
    image: {
       type: String,
       required: [true, "please add img"], 
    },
    brand: {
        type: String,
        required: [true, "please add titleProduct"],
    },
    subModel: {
        type: String,
        required: [true, "please add sub model"],
    },
    price: {
        type: String,
        required: [true, "please add price"],
    },
})

const Products = model("Products", newProduct);
module.exports = Products;