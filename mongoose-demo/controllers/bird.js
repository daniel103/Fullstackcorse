const Bird = require("../models/bird");

exports.createBird = async (req, res) => {
  try {
    const newBird = new Bird(req.body);
    await newBird.save();
    res.json({
      success: true,
      data: newBird,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};

exports.getAllBirds = async (req, res) => {
  const birds = await Bird.find();
  res.json({
    success: true,
    data: birds,
  });
};

exports.updateBirds = async (req, res) => {
  try {
    const { id } = req.query;
    const options = {
      new: true,
      runValidators: true,
    };
    const updateBird = await Bird.findByIdAndUpdate(id, req.body, options);
    res.json({
      success: true,
      data: updateBird,
    });
  } catch (error){
    res.json({
      success: false,
      error: error.message,
    });
  }
};

exports.getBirdByIdQuery = async (req, res) => {
  const bird = await Bird.findById(req.params.id);
  res.json({
    success: true,
    data: bird,
  });
};

exports.deleteCatByIdQuery = async (req, res) => {
  try {
    const { deletedCount } = await Bird.deleteOne({ _id: req.query.id });
    if(deletedCount) {
      res.json({
        success: true,
        data: "Bird Deleted",
      });
    }
    res.json({
      success: false,
      error: "Id not found",
    });
  } catch (error){
    res.json({
      success: false,
      error: error.message,
    });
  }
};

