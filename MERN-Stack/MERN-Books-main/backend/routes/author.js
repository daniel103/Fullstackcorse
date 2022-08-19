const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");

router
  .route("/")
  .get(authorController.getAllAuthors)
  .post(authorController.createOneAuthor);

router
  .route("/:id")
  .get(authorController.getOneAuthor)
  .put(authorController.updateOneAuthor)
  .delete(authorController.deleteOneAuthor);

module.exports = router;
