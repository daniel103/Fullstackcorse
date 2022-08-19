const jwt = require("jsonwebtoken");
const User = require("../model/user");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

function generateAccessToken(user) {
  delete user.password;
  return jwt.sign(user, process.env.JWT_SECRET);
}

exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new AppError("Please provide username and password", 400));
  }

  const user = await User.findOne({ username });

  if (user == null) {
    return next(new AppError("Username or Password invalid", 401));
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (isPasswordMatch === false) {
    return next(new AppError("Username or Password invalid", 401));
  }

  const token = generateAccessToken(user._doc);

  res.cookie("token", token);
  res.status(200).json({ status: "success", token });
});

exports.register = catchAsync(async (req, res, next) => {
  const { password } = req.body;
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);

  const token = generateAccessToken(user._doc);
  res.cookie("token", token);
  res.status(201).json({ status: "success", token });
});

exports.logout = (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({ status: "success" });
};
