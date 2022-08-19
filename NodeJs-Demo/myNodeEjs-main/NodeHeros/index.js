require("dotenv").config();
const express = require("express");
const app = express();
// const fs = require("fs");

app.set("view engine", "ejs");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));

app.use(express.static("public"));

app.set("page", "pages/404page")

app.get("/", (req, res) => {
    res.render("pages/index")
})

const heroes =
    [
        {
          id: 1,
          name: "Captain America",
          power: 80
        },
        {
          id: 2,
          name: "Iron Man",
          power: 60
        },
        {
          id: 3,
          name: "SpiderMan",
          power: 90
        }
      ]

app.get("/all", (req, res) => {  
      res.render("pages/main", { heroes })
    });

app.get("/single/:id", (req, res) => {
    let hero = heroes.find((hero) => hero.id == req.params.id);
        res.render("pages/single", { hero });
    });


app.get("/create", (req, res) => {
    // const newHero = {
    //     id: newId,
    //     name: newName,
    //     power: newPower,
    // };

    // let heroes = [... newHero]
    //     const newId = heroes[heroes.length - 1].id + 1;
        
    //     heroes.push(newHero);
    res.render("pages/create")
    });



app.use((req, res) => {
    res.status(404).render('pages/404page');
});