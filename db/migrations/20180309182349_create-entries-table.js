exports.up = function(knex, Promise) {
  return knex.schema.createTable('expenses', (table) => {
    table.increments();
    table.string('name');
    table.string('description');
    table.integer('value');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('expenses');
};
