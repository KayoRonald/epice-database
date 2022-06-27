import { Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  return await knex.schema.createTable('speakers_epice', (table) => {
    table.increments('id').primary()
    table.text('UrlPhoto').notNullable()
    table.text('name').notNullable()
    table.text('occupation').notNullable()
    table.text('description').notNullable()
    table.text('UrlInstagram').notNullable()
    table.text('UrlGithub').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable('speakers_epice')
}
