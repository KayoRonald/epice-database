import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable('database_epice', (table) => {
    table.increments('id').primary()
    table.text('name').notNullable()
    table.text('email').notNullable()
    table.text('curso').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable('database_epice')
}