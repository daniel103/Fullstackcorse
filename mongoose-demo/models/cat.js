const { Schema, model } = require("mongoose");

const catSchema = new Schema({
  name: {
    type: String,
    required: [true, "Cat must have a name"],
  },
  age: {
    type: Number,
    required: [true, "Cat must have a age"],
  },
  color: {
    type: String,
    default: "black",
  },
});

const Cat = model("Cat", catSchema);
module.exports = Cat;
