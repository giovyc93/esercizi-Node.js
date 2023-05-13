const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./passport');
const userRouter = require('./user');
const dotenv = require('dotenv');
const db = require('./db');
dotenv.config();

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());


app.use('/users', userRouter);


const PORT = process.env.PORT || 5000;
db.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(`Error connecting to database: ${err}`));
