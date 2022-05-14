import knex from "knex";
import knexFile from "../../knexfile";
const environment: any = process.env.NODE_ENV || "development";
// console.log();
export default knex(knexFile[environment]);
