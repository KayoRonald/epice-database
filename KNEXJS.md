<h1 align="center">
    <strong>EPICE 💜</strong>
</h1>

Query Builder
Escrita:
```sql
knex('users').where('id', 1)
```
Resultado:
```sql
select * from `users` where `id` = 1
```

## Escolhendo o banco

Tipos suportados: `PostgreSQL, CockroachDB, MSSQL, MySQL, MariaDB, SQLite3, Better-SQLite3, Oracle, e Amazon Redshift `

```ts
client: 'mysql', //nome do pacote que foi instalado
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
  directory: path.resolve(__dirname, 'src', 'models', 'migrations'),
},
  seeds: {
  directory: path.resolve(__dirname, 'src', 'models', 'seeds'),
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

```ts
import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable('database_epice', (table) => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('email').notNullable();
    table.text('curso').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable('database_epice');
}
```

Agora podemos executar o comando abaixo realizando uma migração:

```bash
yarn knex migrate:latest
```
Para desfazer toda nossa tabela, é só rodar a `migrate:rollback`
```bash
yarn knex migrate:rollback
```

### Seed (Colocando dados fakes)
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


<hr/>


<p align="center">
  <img src="https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png" width="100" title="Nodejs">
  <img src="https://277969009-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/spaces%2F-Lf4a7JZE8Gwa4Y0EaRf%2Favatar.png?generation=1559220593217278&alt=media" width="100" alt="TypeScript" title="TypeScript">
  <img src="https://iconape.com/wp-content/files/bl/347262/svg/knexjs-seeklogo.com.svg" width="100" alt="chakra" title="Knexjs"
</p>
