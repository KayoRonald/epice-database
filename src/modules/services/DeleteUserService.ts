import knex from '../../database/connection'
import AppError from '../../middleware/AppError'

interface User {
  email: string;
} 

export default class DeleteUserService {
  public async execute({ email }: User): Promise<User> {

    const users: any = await knex('database_epice')
      .from('database_epice')
      .where({email})
      .del()
    console.log(users)
    // Verificando se o email existe
    if(users === 0){
      throw new AppError(`Usuário não encontrado em nosso sistema.`, 404);
    }
    // knex.destroy()    
    return users
  }
}
