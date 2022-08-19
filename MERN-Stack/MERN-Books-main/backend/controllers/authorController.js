const Author = require("../model/author");
const factory = require("../utils/handleFactory");

exports.getAllAuthors = factory.getAll(Author);
exports.createOneAuthor = factory.createOne(Author);
exports.deleteOneAuthor = factory.deleteOne(Author);
exports.updateOneAuthor = factory.updateOne(Author);
exports.getOneAuthor = factory.getOne(Author);
