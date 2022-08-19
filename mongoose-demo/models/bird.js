const { Schema, model } = require("mongoose");

const birdSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Bird must have a name"],
  },
  length: {
    type: Number,
    default: 0.5,
  },
  speed: {
    type: Number,
    required: [true, "Bird must have a speed"],
  },
  extinction: {
    type: Boolean,
    default: false,
  },
});

const Bird = model("Bird", birdSchema);
module.exports = Bird;
