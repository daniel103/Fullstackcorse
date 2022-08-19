const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  name: {
    type: String,
    required: [true, "Book must have a name"],
  },
  pages: {
    type: Number,
    required: [true, "Book must have pages number"],
    min: [1, "Book pages must be at least 1, got {VALUE}"],
  },
  difficulty: {
    type: String,
    enum: {
      values: ["easy", "medium", "hard"],
      message: `difficulty must be "easy", "medium", "hard". medium {VALUE}`,
    },
    default: "easy",
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: [true, "Book must have an author"],
  },
  image: {
    type: String,
  },
  reviews: {
    type: [Schema.Types.ObjectId],
    ref: "Review",
  },
});

const Book = model("Book", bookSchema);
module.exports = Book;
