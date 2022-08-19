const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router
  .route("/")
  .get(bookController.getAllBooks)
  .post(bookController.creatOneBook);

router
  .route("/:id")
  .get(bookController.getOneBook)
  .put(bookController.updateOneBook)
  .delete(bookController.deleteOneBook);

module.exports = router;
