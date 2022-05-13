import knex from '../../database/connection'
import AppError from '../../middleware/AppError'

interface User {
  email: string
  curso: string
} 

export default class UpdateUserServiceCurso {
  public async execute({ email, curso }: User): Promise<void> {
   
    const users = await knex('database_epice')
      .from('database_epice')
      .update({curso})
      .where({email})
    
    if(users === 0){
      throw new AppError(`Esse email não está registrado`, 404)
    }    
    // knex.destroy()    
    return;
  }
}