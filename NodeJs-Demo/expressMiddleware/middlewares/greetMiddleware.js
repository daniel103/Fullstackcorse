function greetMiddleware(req, res, next) {
  console.log("Hello I'm middleware");
  next();
}

module.exports = greetMiddleware