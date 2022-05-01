import knex from 'knex';
import knexFile from '../../knexfile';

export default knex(knexFile['development']);
console.log("🎲 Database running 🎲")