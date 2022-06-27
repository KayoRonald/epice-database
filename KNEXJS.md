<h1 align="center">
    <strong>EPICE 💜</strong>
</h1>

Query Builder Knexjs

Escrita:
```sql
knex('users').where('id', 1)
```

Resultado:
```sql
select * from `users` where `id` = 1
```

## O que é o [Knex](http://knexjs.org/)?

É uma biblioteca para construção de queries por meio do javascript.
Assim, facilitando a forma que podemos fazer consultas, criação de dados, de uma hora para a outra sem precisar alterar o códigos. Dessa forma, pode-se migrar de banco de dados SQL para outro tipo. Possuindo suporte para: PostgreSQL, CockroachDB, MSSQL, MySQL, MariaDB, SQLite3, Better-SQLite3, Oracle, e Amazon Redshift. Basta fazer download via npm ou yarn dos clientes. Além de seprar os ambientes, para: development, staging, production.

## Instalação
Instalar rodando o comando `yarn add knex` e baixar o driver do Banco SQL que será utilizado.

## Escolhendo o banco

Exemplo:

```bash
npm install pg
```

```bash
npm install sqlite3
```

```bash
npm install mysql
```

## Consiguração de variáveis

>.env

```env
MYSQL_HOST=
MYSQL_DATABASE=
MYSQL_USER=
MYSQL_PASSWORD=
POSTGRES_URL=
NODE_ENV=development
```

> src/config/index.ts

```ts
import dotenv from 'dotenv'
dotenv.config()

export default {
  app: {
    port: process.env.PORT || 3333
  },
  db: {
    host: process.env.MYSQL_HOST ||,
    user: process.env.MYSQL_USER ||,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  },
  environment:
    process.env.NODE_ENV
}
```

## Conexão com o Banco de dados

> Arquivo src/database/knex.ts

```ts
import dotenv from 'dotenv'
import knex from 'knex'
import knexFile from '../../knexfile'

dotenv.config()

export default knex(knexFile[String(process.env.NODE_ENV)])
```

> Arquivo knexfile.ts

```ts
import config from './src/config/'
import path from 'path'

interface KnexConfig {
   [key: string]: object;
};

export default {
  development: {
    name: 'sqlite',
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: 'db.db'
    },
    migrations: {
      tableName: 'knex_migrations_epice',
      directory: path.resolve(__dirname, 'src', 'models', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'models', 'seeds')
    }
  },
  staging: {
    name: 'postgresql',
    client: 'pg',
    connection: process.env.POSTGRES_URL,
    migrations: {
      tableName: 'knex_migrations_epice',
      directory: path.resolve(__dirname, 'src', 'models', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'models', 'seeds')
    }
  },
  production: {
    name: 'MySql',
    client: 'mysql',
    connection: {
      host: config.db.host,
      user: config.db.user,
      password: config.db.password,
      database: config.db.database
    },
    migrations: {
      tableName: 'knex_migrations_epice',
      directory: path.resolve(__dirname, 'src', 'models', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'models', 'seeds')
    }
  }
} as KnexConfig
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

## Fazendo uma consulta

```ts
import knex from '../database/knex'

type Users = {
  id: number
  name: string
  curso: string
  createdAt: string
}

export default class ListService {
  public async execute (): Promise<Users> {
    const users = await knex('database_epice')
      .from('database_epice')
      .select<Users>('id', 'name', 'curso', 'created_at')
      .orderBy('id')
    console.log(users)
    return users
  }
}
```

<hr/>

<div align="center">
  <img src="assets/nodejs.png" width="100" title="Nodejs"/>
  <img src="assets/typescript.png" width="100" alt="TypeScript" title="TypeScript" />
  <img src="assets/knex-logo.png" width="100" alt="Knexjs" title="Knexjs" />
</div>
