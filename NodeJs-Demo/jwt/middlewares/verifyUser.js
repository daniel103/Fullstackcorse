const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) return res.status(400).send("You need to login");
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.userId = decoded.id;
  });
  next();
};

module.exports = verifyUser;
