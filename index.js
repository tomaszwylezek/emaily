const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

passport.use(new GoogleStrategy());

app.use();

const PORT = process.env.PORT || 5000;
app.listen(PORT);


// http://localhost:5000/auth/google/callback
