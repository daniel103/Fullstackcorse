const mongoose = require("mongoose");

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connect to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectMongo;
