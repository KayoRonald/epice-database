import dotenv from 'dotenv'
dotenv.config()

export default {
  app: {
    port: process.env.PORT || 3333
  },
  db: {
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'teste'
  },
  environment:
    process.env.NODE_ENV
}
