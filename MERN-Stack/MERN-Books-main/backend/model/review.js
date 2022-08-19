const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  review: {
    type: String,
    required: [true, "Please provide review"],
    minlength: [2, "Review must have at least 2 characters"],
  },
  createBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Must have a user Id"],
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Review = model("Review", reviewSchema);
module.exports = Review;
