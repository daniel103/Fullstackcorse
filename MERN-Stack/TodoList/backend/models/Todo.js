const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  task: {
    type: String,
    required: [true, "Task is required"],
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = model("Todo", todoSchema);
module.exports = Todo;
