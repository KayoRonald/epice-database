import config from "./src/config/";
import path from "path";

interface KnexConfig {
  [key: string]: object;
};

export default {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "db.db"
    },
    migrations: {
      tableName: "knex_migrations_epice",
      directory: path.resolve(__dirname, "src", "models", "migrations")
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "models", "seeds")
    }
  },
  production: {
    client: "mysql",
    connection: {
      host: config.db.host,
      user: config.db.user,
      password: config.db.password,
      database: config.db.database
    },
    migrations: {
      tableName: "knex_migrations_epice",
      directory: path.resolve(__dirname, "src", "models", "migrations")
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "models", "seeds")
    }
  }
} as KnexConfig
