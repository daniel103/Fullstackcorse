const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderItems: [
    {
      quantity: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      total: { type: Number, required: true},
    },
  ],
  shoppingAddress: {
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    creditCard: { type: String, required: true },
  },
  date: {
    type: String,
    default:  new Date().toLocaleString('he-IL'),
  },
},
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;