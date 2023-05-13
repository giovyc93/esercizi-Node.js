const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const pool = require("../db");

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "your_jwt_secret",
    },
    async (jwt_payload, done) => {
      try {
        const user = await pool.query("SELECT * FROM users WHERE id=$1", [
          jwt_payload.id,
        ]);
        if (user.rows.length === 0) {
          return done(null, false);
        } else {
          return done(null, user.rows[0]);
        }
      } catch (err) {
        return done(err, false);
      }
    }
  )
);