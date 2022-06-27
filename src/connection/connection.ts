import knex from 'knex'
import dotenv from 'dotenv'
import knexFile from '../../knexfile'
import config from '../config'

const name = knexFile[String(config.environment)].name
dotenv.config()

export default knex(knexFile[String(config.environment)])
console.log(`Type Database: ${name}`)
