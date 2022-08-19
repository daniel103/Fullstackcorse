const router = require("express").Router();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const uuid = require("uuid");

const USERS_DATA_PATH = "C:/Users/97250/Desktop/Node Demo/jwt/data/users.json";
const ENCODING = "utf-8";

function generateAccessToken(id) {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30m",
  });
}

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).send("Missing Info");
  fs.readFile(USERS_DATA_PATH, ENCODING, async (err, data) => {
    if (err) return res.status(500).send("Sorry, Server problem");
    const users = JSON.parse(data);
    const user = users.find((user) => user.username == username);
    if (!user) return res.send("We don't have this username");
    const result = await bcrypt.compare(password, user.password);
    if (!result) return res.status(403).send("Password didn't match");
    const access_token = generateAccessToken(user.id);
    const refresh_token = jwt.sign(
      { id: user.id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "100d" }
    );
    res.cookie("refresh-token", refresh_token);
    res.send({ token: access_token });
  });
});

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  fs.readFile(USERS_DATA_PATH, ENCODING, async (err, data) => {
    if (err) return res.sendStatus(500);
    const users = JSON.parse(data);
    const user = users.find((user) => user.username == username);
    if (user) return res.status(400).send("Username Already Exist");
    const saltRound = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, saltRound);
    const newUser = {
      id: uuid.v4(),
      username,
      password: hashPassword,
    };
    users.push(newUser);
    fs.writeFile(USERS_DATA_PATH, JSON.stringify(users), (err) => {
      if (err) return res.sendStatus(500);
    });
    res.sendStatus(201);
  });
});

router.get("/refresh", (req, res) => {
  const refresh_token = req.cookies["refresh-token"];
  if (!refresh_token) return res.status(403).send("You need to login!");
  jwt.verify(
    refresh_token,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if (err) return res.sendStatus(403);
      const access_token = generateAccessToken(decoded.id);
      res.send({ token: access_token });
    }
  );
});

router.delete("/logout", (req, res) => {
  res.clearCookie("refresh-token");
  res.send("Logout successfully");
});

module.exports = router;
