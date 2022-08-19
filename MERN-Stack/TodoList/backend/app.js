const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("All good");
});

app.use("/todo", require("./routes/todo"));

app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    data: null,
  });
});

module.exports = app;
