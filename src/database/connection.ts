import knex from 'knex'
import config from '../config/'
import knexFile from '../../knexfile'

export default knex(knexFile[String(config.environment)])
