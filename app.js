require('dotenv').config();
const express = require('express');
const asyncErrors = require('express-async-errors');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;


let planets = [
  {
    id: 1,
    name: 'Earth',
  },
  {
    id: 2,
    name: 'Mars',
  },
];


app.use(express.json());
app.use(morgan('dev'));


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});