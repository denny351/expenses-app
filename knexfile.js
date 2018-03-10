module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/expenses',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
}

