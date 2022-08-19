require("dotenv").config();
const express = require('express')
const app = express();
const MongoDB = require("./utils/connectDB");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use("/api/product/v1", require("./routes/product"));
app.use("/api/user", require("./routes/users"));
app.use("/api/orders", require("./routes/order"))
MongoDB();


const PORT = process.env.PORT || 8000;
app.listen(PORT , () => console.log(`app on PORT ${PORT}`))


  
