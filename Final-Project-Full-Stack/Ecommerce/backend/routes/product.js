const express = require("express");
const router = express.Router();
const productFn = require("../controller/products");

router
    .route("/")
    .get(productFn.getAllProducts)
    .post(productFn.createOneProduct)


    router
    .route("/:id")
    .put(productFn.updateOneProduct)
    .get(productFn.getOneProduct)
    .delete(productFn.deleteOneProduct)

module.exports = router;