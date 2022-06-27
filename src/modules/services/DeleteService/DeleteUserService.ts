import knex from '../../../connection/connection'
import { NotFoundException } from '../../../middleware/'

export default class DeleteUserService {
  public async execute ({ email }: {email: string}): Promise<{email: string}> {
    const users = await knex('database_epice')
      .where({ email })
      .del<{email: string}>()
    // Verificando se o email existe
    if (!users) {
      throw new NotFoundException('Usuário não encontrado em nosso sistema.')
    }
    return users
  }
}
