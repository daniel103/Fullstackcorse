const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Connect to mongo"))
  .catch(() => console.log("Something went wrong when connect to DB"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App running on port ${port}`));
