const product = require("../model/products");
const productFn = require("../utils/products");

exports.createOneProduct = productFn.createOne(product);
exports.getCategory = productFn.filterCategory(product)
exports.getAllProducts = productFn.getAll(product);
exports.updateOneProduct = productFn.updateOne(product);
exports.getOneProduct = productFn.getOne(product);
exports.deleteOneProduct = productFn.deleteOne(product);
