import 'dotenv/config'
import path from 'path';

export default {
  development: {
    client: 'mysql',
    connection: {
      host: '',
      user: '',
      password:'',
      database: '',
  },
    igrations: {
      tableName: 'knex_migrations_epice',
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
  },
};