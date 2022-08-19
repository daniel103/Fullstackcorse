require("dotenv").config();
const express = require("express");
const app = express();

app.set("view engine", "ejs");

const PORT = process.env.PORT || 6500;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('Hello');
});



app.use((req, res) => {
    res.status(404).render('pages/404page');
});