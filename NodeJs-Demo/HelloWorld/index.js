const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Heroes API");
});

app.get("/all", (req, res) => {
  fs.readFile("heroes.json", "utf-8", (err, data) => {
    if (err) {
      res.send({ error: true, message: "something went wrong" });
    }
    res.send(data);
  });
});

app.get("/single/:id", (req, res) => {
  fs.readFile("heroes.json", "utf-8", async (err, data) => {
    if (err) {
      res.send({ error: true, message: "something went wrong" });
    }
    const heroes = await JSON.parse(data);
    let hero = heroes.find((hero) => hero.id == req.params.id);

    if (req.query.name) {
      hero = heroes.find((hero) => hero.name.includes(req.query.name));
    }

    res.send(hero);
  });
});

app.post("/create", (req, res) => {
  fs.readFile("heroes.json", "utf-8", async (err, data) => {
    if (err) {
      res.send({ error: true, message: "something went wrong" });
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
        res.send({ error: true, message: "something went wrong" });
      }
      res.send({ error: false, message: "New Hero Created Successfully" });
    });
  });
});

app.put("/update/:id", (req, res) => {
  fs.readFile("heroes.json", "utf-8", async (err, data) => {
    let heroes = await JSON.parse(data);
    const targetIndex = heroes.findIndex((hero) => hero.id == req.params.id);
    if (targetIndex < 0) {
      return res.status(400).send("Hero doesn't exist");
    }
    heroes[targetIndex].name = req.body.name;
    heroes[targetIndex].power = req.body.power;

    fs.writeFile("heroes.json", JSON.stringify(heroes), (err) => {
      if (err) {
        res.send("Some thing went wrong");
      }
      res.send("Hero update successfully");
    });
  });
});

app.get("/powerUp", (req, res) => {
  fs.readFile("heroes.json", "utf-8", async (err, data) => {
    const heroes = await JSON.parse(data);
    const filteredHeroes = heroes.filter((hero) => hero.power > req.query.p);
    res.send(filteredHeroes);
  });
});

app.get("/powerDown", (req, res) => {
  fs.readFile("heroes.json", "utf-8", async (err, data) => {
    const heroes = await JSON.parse(data);
    const filteredHeroes = heroes.filter((hero) => hero.power < req.query.p);
    res.send(filteredHeroes);
  });
});

app.get("/name", (req, res) => {
  fs.readFile("heroes.json", "utf-8", async (err, data) => {
    const heroes = await JSON.parse(data);
    const filteredHeroes = heroes.filter((hero) =>
      hero.name.includes(req.query.n)
    );
    res.send(filteredHeroes);
  });
});

app.delete("/delete/:id", (req, res) => {
  fs.readFile("heroes.json", "utf-8", async (err, data) => {
    if (err) return res.send("Some thing went wrong");
    const heroes = await JSON.parse(data);
    const afterDelete = heroes.filter((hero) => hero.id != req.params.id);
    fs.writeFile("heroes.json", JSON.stringify(afterDelete), (err) => {
      if (err) res.send("The delete didn't work");
      res.send("Deleted successfully!");
    });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
