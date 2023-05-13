const passport = require("passport");

app.use(passport.initialize());
require("./config/passport");

app.use("/users", require("./routes/users"));
app.use("/planets", require("./routes/planets"));