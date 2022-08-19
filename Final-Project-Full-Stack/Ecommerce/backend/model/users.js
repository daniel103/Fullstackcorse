const {Schema, model} = require("mongoose");


const userSchema = new Schema({
    firstName: {
        type: String,
        required:[true, "please first name"],
    },
      lastName: {
        type: String,
        required:[true, "please last name"],
    },
    username: {
        type: String,
        required:[true, "please name"],
    },
    email: {
        type: String,
        required: [true, "please email"],
    },
    password: {
        type: String,
        required: [true, "please password"],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
})

const User = model("user", userSchema);
module.exports = User;