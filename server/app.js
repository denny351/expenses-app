const ENV = process.env.NODE_ENV || 'development';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const knexConfig = require('../knexfile')[ENV];
const knex = require('knex')(knexConfig);

app.use(bodyParser.json());

const entriesRoutes = require('./routes/entries');

app.use("/api/entries", entriesRoutes(knex));



const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log('Server is running')
})
