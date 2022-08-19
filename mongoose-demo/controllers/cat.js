const Cat = require("../models/cat");

exports.getAllCat = async (req, res) => {
  const cats = await Cat.find();
  res.json({
    success: true,
    data: cats,
  });
};

exports.createCat = async (req, res) => {
  try {
    console.log(req.body);
    const newCat = new Cat(req.body);
    await newCat.save();
    res.json({
      success: true,
      data: newCat,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateCat = async (req, res) => {
  try {
    const { id } = req.query;
    const options = {
      new: true,
      runValidators: true,
    };
    const updateCat = await Cat.findByIdAndUpdate(id, req.body, options);
    res.json({
      success: true,
      data: updateCat,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};

exports.getCatByIdQuery = async (req, res) => {
  const cat = await Cat.findById(req.params.id);
  res.json({
    success: true,
    data: cat,
  });
};

exports.deleteCatByIdQuery = async (req, res) => {
  try {
    const { deletedCount } = await Cat.deleteOne({ _id: req.query.id });
    if (deletedCount) {
      res.json({
        success: true,
        data: "Cat Deleted",
      });
    }
    res.json({
      success: false,
      error: "Id not found",
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};
