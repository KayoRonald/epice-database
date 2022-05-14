import knex from "knex";
import knexFile from "../../knexfile";

const environment = 
  process.env.NODE_ENV !== 'development' ? 'production' : 'development';
console.log(environment)
export default knex(knexFile[String(environment)]);