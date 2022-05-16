import knex from '../../database/connection'
import AppError from '../../middleware/AppError'

interface User {
  name: string
  email: string
  curso: string
}

export default class CreateUserService {
  public async execute({ name, email, curso }: User): Promise<void> {
    const data = {
      name,
      email,
      curso
    }
    // Verificando se o email já está registrado
    const users: any = await knex('database_epice')
      .from('database_epice')
      .where({ email })

    if (users.length === 1) {
      throw new AppError(`Email já cadastrado`);
    }
    const response: any = await knex('database_epice').insert(data);

    // knex.destroy()    
    return response
  }
}
