require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./utils/connectDB");
const app = express();

const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controllers/errorController");

connectDB();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static("./public"));

// ROUTES
app.use("/api/v1/author", require("./routes/author"));
app.use("/api/v1/book", require("./routes/book"));
app.use("/auth", require("./routes/auth"));

app.all("*", (req, res, next) => {
  next(new AppError("Page not found", 404));
});

app.use(globalErrorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`app running on port ${PORT}`));
