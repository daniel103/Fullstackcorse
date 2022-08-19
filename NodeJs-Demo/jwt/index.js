require("dotenv").config();
const cookieParser = require("cookie-parser");
const { raw } = require("express");
const express = require("express");
const session = require("express-session")
const passport = require("passport");
const app = express();
require("./auth");
const cors = require("cors")

function isLoggedIn (req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

app.use(cors());
app.use(session({ secret: 'cats' }));
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");

app.use(express.json());
app.use(cookieParser());

app.use("/auth", require("./routes/auth"));
app.use("/tweet", require("./routes/tweet"));
app.get("/", (req, res) => {
    res.send(`<a href="/auth/google">Authenticate with Google</a>`)
})

app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

app.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/protected',
        failureRedirect: '/auth/failure',
    })
)

app.get('/auth/failure', (req, res) => {
    res.send("something went wrong..");
});

app.get("/protected", isLoggedIn, (req, res) => {
    res.send(`Hello ${req.user.displayName}`);
})

app.get('/logout', (req, res) => {
    req.logout()
    req.session.destroy();
    res.send('Goodbye');
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Running on ${port}`));
