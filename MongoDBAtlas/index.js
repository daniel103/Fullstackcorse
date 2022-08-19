require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db/MongoConect")

const PORT = process.env.PORT || 6000;
app.listen(PORT, console.log(`ranting this is port ${PORT}`))
app.use(express.json());

