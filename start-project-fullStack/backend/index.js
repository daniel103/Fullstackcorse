require("dotenv").config();
const express = require('express')
const app = express();
const MongoDB = require("./utils/connectDB");

MongoDB();

  
app.get('/' , (req,res) => {
    res.send("text"); 
})

const PORT = process.env.PORT || 8000;
app.listen(PORT , () => console.log(`app on PORT ${PORT}`))


  
