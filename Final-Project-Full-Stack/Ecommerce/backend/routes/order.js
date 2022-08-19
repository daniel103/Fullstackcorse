const express = require("express");
const router = express.Router();
const orderFn = require("../controller/order")

router.
    route("/")
    .post(orderFn.createOneOrder)
    .get(orderFn.getAll)
    router
    .route("/:id")
    .get(orderFn.getOneOrder)
    .delete(orderFn.deleteOneOrder);

module.exports = router;