const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.post('/', (req, res) => {
    const entryData = {
      name: req.body.name,
      description: req.body.description,
      value: req.body.value
    }
    knex('expenses').insert(entryData).then(() => {
      res.sendStatus(200)
    })
  })

	router.get('/', (req, res) => {
		if (req.query.search) {
			knex('expenses')
				.where(function() {
					this.where('name', 'ilike', `%${req.query.search}%`).orWhere('description', 'ilike', `%${req.query.search}%`);
				})
				.select()
				.then(doc => {
					res.json(doc);
				});
		} else {
			knex('expenses')
				.select()
				.then(doc => {
					res.json(doc);
				});
		}
	});

  return router;
}