import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("database_epice").del();

	// Inserts seed entries
	await knex("database_epice").insert([
		{
			name: "João Paulo",
			email: 'kayo1@gmail.com',
			curso: 'info'
		},
		{
			name: "João Paulo",
			email: 'kayo2@gmail.com',
			curso: 'info'
		},
		{
			name: "João Paulo",
			email: 'kay3@gmail.com',
			curso: 'info'
		}
	]);
};
