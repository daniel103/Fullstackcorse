const { Schema, model } = require("mongoose");

const AUTHOR_MIN_AGE = 0;
const AUTHOR_MAX_AGE = 120;

const authorSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Author must have a first name"],
  },
  lastName: {
    type: String,
    required: [true, "Author must have a last name"],
  },
  age: {
    type: Number,
    required: [true, "Author must have an age"],
    min: [
      AUTHOR_MIN_AGE,
      `Author's age cannot be less than ${AUTHOR_MIN_AGE}, received {VALUE}`,
    ],
    max: [
      AUTHOR_MAX_AGE,
      `Authors age cannot exceed ${AUTHOR_MAX_AGE}, received {VALUE}`,
    ],
  },
});

const Author = model("Author", authorSchema);
module.exports = Author;
