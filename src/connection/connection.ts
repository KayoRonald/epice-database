import knex from 'knex'
import dotenv from 'dotenv'
import knexFile from '../../knexfile'
import config from '../config'

dotenv.config()

export default knex(knexFile[String(config.environment)])
