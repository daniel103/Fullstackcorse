const express = require("express");
const router = express.Router();
const fs = require("fs");
const verifyUser = require("../middlewares/verifyUser");
const uuid = require("uuid");

const TWEETS_DATA_PATH =
  "C:/Users/97250/Desktop/Node Demo/jwt/data/tweets.json";
const ENCODING = "utf-8";

router.get("/all", verifyUser, (req, res) => {
  fs.readFile(TWEETS_DATA_PATH, ENCODING, (err, data) => {
    if (err) return res.sendStatus(500);
    const tweets = JSON.parse(data);
    res.send(tweets);
  });
});

router.get("/myTweets", verifyUser, (req, res) => {
  fs.readFile(TWEETS_DATA_PATH, ENCODING, (err, data) => {
    if (err) return res.status(500).send("Sorry, We are down..");
    const tweets = JSON.parse(data);
    const filterTweets = tweets.filter(
      (tweet) => tweet.publisherId == req.userId
    );
    return res.render("tweets", { tweets: filterTweets });
  });
});

router.post("/create", verifyUser, (req, res) => {
  const { tweet } = req.body;
  fs.readFile(TWEETS_DATA_PATH, ENCODING, (err, data) => {
    if (err) return res.sendStatus(500);
    const tweets = JSON.parse(data);
    const newTweet = {
      id: uuid.v4(),
      publisherId: req.userId,
      tweet,
    };
    tweets.push(newTweet);
    fs.writeFile(TWEETS_DATA_PATH, JSON.stringify(tweets), (err) => {
      if (err) return res.sendStatus(500);
      return res.sendStatus(201);
    });
  });
});

router.delete("/delete/:id", verifyUser, (req, res) => {
  fs.readFile(TWEETS_DATA_PATH, ENCODING, (err, data) => {
    if (err) return res.sendStatus(500);
    const tweets = JSON.parse(data);
    const targetIndex = tweets.findIndex((tweet) => tweet.id == req.params.id);
    if (targetIndex < 0) return res.status(400).send("ID not found");
    const targetTweet = tweets[targetIndex];
    if (targetTweet.publisherId != req.userId)
      return res.status(403).send("You can delete only your's tweets");
    tweets.splice(targetIndex, 1);
    const jsonTweets = JSON.stringify(tweets);
    fs.writeFile(TWEETS_DATA_PATH, jsonTweets, (err) => {
      if (err) return res.sendStatus(500);
    });
    res.status(202).send("Tweet delete successfully");
  });
});

module.exports = router;
