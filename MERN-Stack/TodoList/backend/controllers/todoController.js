const Todo = require("../models/Todo");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
};

exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);

    res.status(201).json(todo);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
  }
};

exports.DeleteAll = async (req, res) => {
  try {
    const deleteAll = await Todo.deleteMany()
    res.status(200).json(
      {
        data: null
      }
    )
    console.log(deleteAll);
  } catch (error) {
    console.log(error);
  }
}

exports.UpdateAll = async (req, res) => {
  try {
    const reqBody = req.body;
    const updateTodo = await Todo.updateMany({}, {completed: req.body.completed})
    console.log(updateTodo)

    res.status(200).json(updateTodo);
  } catch (error) {
    console.log(error)
  }
}
