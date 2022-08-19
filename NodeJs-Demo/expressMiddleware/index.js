// const express = require("express");
// const app = express();
// const logger = require("./middlewares/logger");
// const greetMiddleware = require("./middlewares/greetMiddleware");
// const dateMiddleware = require("./middlewares/dateMiddleware");

// app.use(logger);

// app.get("/greet", (req, res) => {
//   console.log(req.currDate);
//   res.send("Hello");
// });

// app.get("/time", dateMiddleware, (req, res) => {
//   res.send("Time on server " + req.currDate);
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log("We are rock & roll"));

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const newUser = require("./middlewares/newUser")
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.cookies);
  console.log(req.cookies["faveLang"]);
  if (req.cookies["faveLang"] == "javascript") {
    res.send("I know your fave is JS");
  } else {
    res.send("It's not JS ");
  }
});

app.post("/newUser", (req, res) => {
  res.cookie("age", req.body.age);
  res.send("OK")
  console.log("age", req.body.age)
})


app.post("/tellMeYourFave", (req, res) => {
  res.cookie("faveLang", req.body.fave);
  res.send("test");
});

app.get("/faveFood", (req, res) => {
  res.cookie("faveFood", req.query.food);
  if (req.cookies["faveFood"] == "pizza") {
    res.send("I know you like pizza");
  }
  res.send("cookie set successfully");
});

app.get("/showCookies", (req, res) => {
  res.send(req.cookies);
});

app.get("/deleteAllCookies", (req, res) => {
    res.clearCookie("faveFood")
    res.send("Delete cookie")
})

// build 2 routes
// 1. set name cookie by query

app.get("/setNameCookie", (req, res) => {
    res.cookie("name", req.query.name).send("cookie set")
})

app.get("/getNameCookie", (req, res) => {
    res.send(req.cookies["name"])
})

app.get("/expired", (req, res) => {
    res.cookie("cookie", "monster", {
        maxAge: 10000
    }).send("cookie set")
})

const PORT = 5000;
app.listen(PORT, () => console.log("We are rock & roll"));
