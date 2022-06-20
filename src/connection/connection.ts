import dotenv from 'dotenv'
import knex from 'knex'
import config from '../config'
import knexFile from '../../knexfile'
dotenv.config()

export default knex(knexFile[String(process.env.NODE_ENV)])
console.log(config.environment)
