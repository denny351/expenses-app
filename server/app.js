const ENV = process.env.NODE_ENV || 'development';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const knexConfig = require('../knexfile')[ENV];
const knex = require('knex')(knexConfig);




const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log('Server is running')
})
