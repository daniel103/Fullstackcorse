require("dotenv").config();
const express = require("express");
const app = express();

app.set("view engine", "ejs");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));

app.use(express.static("public"));

app.get("/", (req, res) => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    admin: false,
  };
  res.render("pages/index", { user });
});


app.get("/main", (req, res) => {
  const animals =  [
    { name: "lion", type: "cat" },
    { name: "wagtail", type: "bird" },
    { name: "tiger", type: "cat" },
    { name: "shark", type: "fish" },
  ];
  res.render("pages/main", { animals });
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.use((req, res) => {
  res.status(404).render("pages/404page");
});

