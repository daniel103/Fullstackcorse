require("dotenv").config();
const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/weapons", require("./routes/weapons.route"));
app.use("/warriors", require("./routes/warriors.route"));

const PORT = 1000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
