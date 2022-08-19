const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please insert email"],
    unique: [true, "Email is already exist"],
    validate: [isEmail, "invalid email"],
  },

  password: {
    type: String,
    required: [true, "Please insert password"],
    minlength: [6, "Password must be at least 6 character, got {VALUE}"],
  },

  firstName: {
    type: String,
  },

  lastName: {
    type: String,
  },

  username: {
    type: String,
    required: [true, "Please insert username"],
    unique: [true, "Username already exist"],
  },
});

const User = model("User", userSchema);
module.exports = User;
