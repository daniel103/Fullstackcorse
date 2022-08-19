const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to heroes API");
})

app.get("/all", (req, res) => {
    fs.readFile("heroes.json", "utf-8" ,(err, data) => {
        if (err) {
            res.send({ error: true, message: "something want wrong" });
        }
        console.log(data);
    })
    res.send("test");
})

app.get("/single/:id", (req, res) => {
    fs.readFile("heroes.json", "utf-8", async (err, data) => {
        if (err) {
            res.send({ error: true, message: "something want wrong" });
        }
        const heroes = await JSON.parse(data);
        let hero = heroes.find((hero) => hero.id == req.params.id);

        if(req.query.name) {
            hero = heroes.find(hero => hero.name.includes(req.query.name));
        }

        res.send(hero);
    });
})

app.post("/create", (req, res) => {
    fs.readFile("heroes.json", "utf-8", async (err, data) => {
        if (err) {
            res.send({ error: true, message: "something want wrong" });
        }
        const heroes = await JSON.parse(data);
        const newId = heroes[heroes.length - 1].id + 1;
        const newHero = {
            id: newId,
            name: req.body.name,
            power: req.body.power,
        };

        heroes.push(newHero);

        fs.writeFile("heroes.json", JSON.stringify(heroes), (error) => {
            if (error) {
                res.send({ error: true, message: "something want wrong"})
            }
            res.send({ error: false, message: "New Hero Created Successfully"});
        });
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

