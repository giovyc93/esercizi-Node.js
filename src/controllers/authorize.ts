const passport = require('passport');

const authorize = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err || !user) {
      res.redirect('/login');
    } else {
      req.user = user;
      next();
    }
  })(req, res, next);
};

module.exports = authorize;