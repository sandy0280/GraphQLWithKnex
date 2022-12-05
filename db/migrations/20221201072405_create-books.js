/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 var db = require('../../config');
 exports.up = function(knex) {
    return db.schema.createTable('books', t => {
        t.increments('id').unsigned().primary();
        t.string('name').notNull();
        t.string('isbn').notNull();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return db.schema.dropTableIfExists('books');
};
