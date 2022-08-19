const order = require("../model/order");
const orderFn = require("../utils/order");

exports.createOneOrder = orderFn.createOrder(order);
exports.getOneOrder = orderFn.getOneOrder(order);
exports.getAll = orderFn.getAll(order);
exports.deleteOneOrder = orderFn.deleteOneOrder(order)