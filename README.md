# Expense Tracker

Track your expenses by adding, searching, and deleting each expense.

### Tech

The main technologies used in this app:

* [React](https://github.com/facebook/react) - "A declarative, efficient, and flexible JavaScript library for building user interfaces."
* [Node.js](https://nodejs.org/en/) - "A JavaScript runtime built on Chrome's V8 JavaScript engine."
* [Express](https://github.com/expressjs/express) - "Fast, unopinionated, minimalist web framework for node."
* [PostgreSQL](https://www.postgresql.org/) - "The world's most advanced open source database"
* [Knex](https://github.com/tgriesser/knex) - "A query builder for PostgreSQL, MySQL and SQLite3, designed to be flexible, portable, and fun to use."

### Installation

First create a psql database called "expenses"

Clone the repository, install all the dependencies, then knex and nodemon must also be installed globally.
```sh
$ git clone
$ cd expenses-app/client
$ npm install
$ cd ..
$ npm install
$ npm install -g knex nodemon
```


Next migrate from the root folder from knex and then start the app
```sh
$ knex migrate:latest
$ npm run dev
```

Finally visit [http://localhost:3000](http://localhost:3000) if not opened automatically