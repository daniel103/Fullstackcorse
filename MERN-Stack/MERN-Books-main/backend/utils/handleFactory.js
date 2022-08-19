const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

exports.getAll = (Model, option) =>
  catchAsync(async (req, res, next) => {
    let doc;
    if (option?.path) {
      doc = await Model.find().populate(option.path);
    } else {
      doc = await Model.find();
    }

    res.status(200).json({
      status: "success",
      data: doc,
    });
  });

exports.getOne = (Model, option) =>
  catchAsync(async (req, res, next) => {
    let doc;
    if (option?.path) {
      doc = await Model.findById(req.params.id).populate(option.path);
    } else {
      doc = await Model.findById(req.params.id);
    }

    if (!doc) {
      return next(new AppError("No document with that ID found", 400));
    }

    res.status(200).json({
      status: "success",
      data: doc,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError("No document with that ID found", 400));
    }

    res.status(200).json({
      status: "success",
      data: doc,
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    console.log("im here");
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      data: doc,
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError("No document with that ID found", 400));
    }

    res.status(200).json({
      status: "success",
      data: null,
    });
  });
