const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.post('/', (req, res) => {
    const entryData = {
      name: req.body.name,
      description: req.body.description,
      value: req.body.value
    }

    knex('expenses').insert(entryData, '*')
    .then(doc => {
      res.send(doc)
    })
  })

  return router;
}