// import 'dotenv/config'
import config from './src/config/'
import path from 'path';

export default {
  development: {
    client: 'mysql',//sqlite3
    connection: {
      // filename: './database.db'
      host: config.db.host,
      user: config.db.user,
      password: config.db.password,
      database: config.db.database,
    },
    migrations: {
      tableName: 'knex_migrations_epice',
      directory: path.resolve(__dirname, 'src', 'models', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'models', 'seeds'),
    },
  },
};