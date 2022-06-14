import knex from '../../../connection/connection'
import AppError from '../../../middleware/AppError'

type User = {
  email: string;
};

export default class DeleteUserService {
  public async execute ({ email }: User): Promise<User> {
    const users = await knex('database_epice')
      .from('database_epice')
      .where({ email })
      .del<User>()
    // Verificando se o email existe
    if (!users) {
      throw new AppError('Usuário não encontrado em nosso sistema.', 404)
    }
    // knex.destroy()
    return users
  }
}
