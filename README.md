<h1 align="center">
    <strong>EPICE 💜</strong>
</h1>

# 🤔 **Como contribuir?**

- Faça um `fork` desse repositório;
  
- Cria uma `branch` com a sua feature: `git checkout -b minha-feature`;
  
- Faça `commit` das suas alterações: `git commit -m 'feat: Minha nova feature'`;

- Faça push para a sua branch: `git push origin minha-feature`.

Banco de dados do epice

## Escolhendo o banco

Tipos suportados: `PostgreSQL, CockroachDB, MSSQL, MySQL, MariaDB, SQLite3, Better-SQLite3, Oracle, e Amazon Redshift `

```ts
  client: 'mysql',
```

## Conexão

```ts
connection: {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
},
```

## Criando o diretório das migrations e do seed

```ts
migrations: {
	tableName: 'knex_migrations_epice',
  directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
},
  seeds: {
  directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
},
```

# Migrations & Seeding

### O que são migrações?

As migrações são uma maneira de fazer alterações ou atualizações no banco de dados, como criar ou descartar tabelas, além de atualizar uma tabela com novas colunas com restrições por meio de scripts gerados.

### Criando/Removendo Tabelas

Vamos criar uma tabela de usuários e tarefas usando a ferramenta de linha de comando knex. Na raiz do nosso projeto execute os seguintes comandos:

```bash
yarn knex migrate:make nome_da_tabela
```

Usando a especificação de chave sem um tamanho de chave, atráves do `unique`
```ts
table.unique(['email', 'id'])
```

```ts
import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable('database_epice', (table) => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('email').notNullable();
    table.text('curso').notNullable();
    table.unique(['email', 'id']);
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable('database_epice');
}
```

Agora podemos executar o comando abaixo realizando uma migração e atualizando nosso banco de dados local:

```bash
yarn knex migrate:latest
```

### Colocando dados fakes
Para iniciar dados em nossa tabela, vamos rodar o `seed`, assim criamos um arquivo com alguns dados dentro
```bash
yarn knex seed:make 01_users
```

```ts
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("nome_da_tabela").del();

	// Inserts seed entries
	await knex("nome_da_tabela").insert([
		{ name: "Fulano", email: 'fulano@gmail.com', curso: '2 Informática ' }
		{ name: "Beutrano", email: 'beutrano@gmail.com', curso: '2 Geologia' },
		{ name: "Ciclano", email: 'ciclano@gmail.com', curso: '2 Edificações' },
	]);
};
```

Agora podemos executar o comando abaixo na raiz do nosso projeto para semear nosso banco de dados!

```bash
yarn knex seed:run
```