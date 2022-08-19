const passport = require("passport");
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID = "1016940724875-fqd5lo15jeabv3qi5e97aqjdoh60cn53.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})