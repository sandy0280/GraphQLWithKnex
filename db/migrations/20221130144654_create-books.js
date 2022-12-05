/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 var db = require('../../config');
 exports.up = async function(knex) {
    await knex.schema.table('books', t => {
        // t.increments('id').unsigned().primary();
        t.string('name').notNull();
        t.string('isbn').notNull();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await db.schema.dropTableIfExists('books');
};
