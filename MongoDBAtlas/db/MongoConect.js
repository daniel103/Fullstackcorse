const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mongodbuser2:daniel123@cluster0.pbfly.mongodb.net/shop');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("mongo connected")
});

module.exports = db;