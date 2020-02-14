const passport = require("passport");
const User = require("../models/User");
const facebookStrategy = require("passport-facebook").Strategy;
const googleStrategy = require("passport-google-oauth20").Strategy;

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// Facebook
passport.use(
  new facebookStrategy({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      //Usuarios previamente registrados
      const user = await User.findOne({
        facebookID: profile.id
      })
      if (user) {
        return done(null, user);
      }
      //Usuarios nuevos
      const newUser = await User.create({
        facebookID: profile.id,
        name: profile.displayName,
      });
      return done(null, newUser);
    }));

// Google 
passport.use(
  new googleStrategy({
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "/auth/google/callback"
    },
    async (_, __, profile, done) => {
      const user = await User.findOne({
        googleID: profile.id
      });
      if (user) {
        user.image = profile._json.picture;
        await user.save();
        return done(null, user);
      }
      const newUser = await User.create({
        googleID: profile.id,
        name: profile.displayName,
        email: profile._json.email,
        image: profile._json.picture
      });
      done(null, newUser);
    }
  )
);

module.exports = passport;