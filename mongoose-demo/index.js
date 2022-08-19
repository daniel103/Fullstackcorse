require("dotenv").config();
const express = require("express");
const app = express();
const connectMongo = require("./connectDB");

connectMongo();

app.use(express.json());

app.use("/cat", require("./routes/cat"));
app.use("/bird", require("./routes/bird"));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Sever is running"));
