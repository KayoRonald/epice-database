import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable('epice_user', (table) => {
    table.increments('id').unique().primary();
    table.text('name').notNullable();
    table.text('email').notNullable().unique().;
    table.text('curso').notNullable();
    table.timestamp('created_at').defaultTo(Date.now());
    table.timestamp('update_at').defaultTo(Date.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable('epice_user');
}