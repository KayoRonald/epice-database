import dotenv from 'dotenv'
dotenv.config()

export default {
  app: {
    port: process.env.PORT || 3333
  },
  db: {
    host: process.env.DATABASE_HOST
  },
  environment:
    process.env.NODE_ENV,
  jwtSecret: process.env.WEB_TOKEN_SECRET,
  disableAuth: !!process.env.DISABLE_AUTH
}
