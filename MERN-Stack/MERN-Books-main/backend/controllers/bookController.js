const Book = require("../model/book");
const factory = require("../utils/handleFactory");

exports.getAllBooks = factory.getAll(Book, { path: "author" });
exports.creatOneBook = factory.createOne(Book);
exports.updateOneBook = factory.updateOne(Book);
exports.deleteOneBook = factory.deleteOne(Book);
exports.getOneBook = factory.getOne(Book, { path: "author" });
