function dateMiddleware(req, res, next) {
  let date = new Date();
  req.currDate = date;
  next();
}

module.exports = dateMiddleware;
