const fs = require("fs");
const datPath = "C:/Users/home/Desktop/Node-Demo/expressMiddleware/middlewares";

function logger(req, res, next) {
  fs.readFile(`${datPath}/logs.txt`, "utf-8", (err, data) => {
    let date = new Date();
    let url = "localhost:5000" + req.originalUrl;
    let str = `\n URL - ${url} Date - ${date}`;
    newData = data + str;
    fs.writeFile(`${datPath}/logs.txt`, newData, (err) => {});
  });
  next();
}

module.exports = logger;
