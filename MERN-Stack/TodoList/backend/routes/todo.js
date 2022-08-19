const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router
  .route("/")
  .get(todoController.getAllTodos)
  .post(todoController.createTodo)
  .put(todoController.UpdateAll)
  .delete(todoController.DeleteAll);

router
  .route("/:id")
  .put(todoController.updateTodo)
  .delete(todoController.deleteTodo);

module.exports = router;
