const Users = require("../model/users");
const catchAsync = require("../utils/catchAsync");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");


const SALT_ROUNDS = 10;

function token (user) {
    delete user.password;
    return JWT.sign(user, process.env.JWT_SECRET);
}

exports.login = () =>
catchAsync(async (req, res, next) => {
    const {email, password} = req.body;

    if(!email || !password) {
        res.status(400).send("There is no email or password");
    }

    const user = await Users.findOne({ email: req.body.email });

    if(email == null) {
        res.status(400).send("Email or password invalid");
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if(matchPassword == false) {
        res.status(401).send("Email or password invalid");
    }

    const tokenUser = token(user._doc);
    res.cookie("token", tokenUser);
        res.status(200).json({
            _id: user._id,
            lastName: user.lastName,
            firstName: user.firstName,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            token: tokenUser,
        })
})

exports.register = () => 
    catchAsync(async(req, res, next) => {
    const {password} = req.body;
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashPassword = await bcrypt.hash(password, salt);
    req.body.password = hashPassword;
    const user = await Users.create(req.body);
    const JWTtoken = token(user._doc);
    res.cookie("token", JWTtoken);
    res.status(201).json({
        success: "success",
        data: JWTtoken,
    })
})
    

exports.logout = (req, res, next) => {
    res.clearCookie("token");
    res.status(200).json({ status: "success" });
};