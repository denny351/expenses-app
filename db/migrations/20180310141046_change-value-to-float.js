
exports.up = function(knex, Promise) {
  return knex.raw('alter TABLE expenses ALTER COLUMN value TYPE float');
};

exports.down = function(knex, Promise) {
  return knex.raw('alter TABLE expenses ALTER COLUMN value TYPE integer');
};

