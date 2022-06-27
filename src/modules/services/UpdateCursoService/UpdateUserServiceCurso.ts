import knex from '../../../connection/connection'
import { NotFoundException } from '../../../middleware/'

interface User {
  email: string;
  curso: string;
}

export default class UpdateUserServiceCurso {
  public async execute ({ email, curso }: User): Promise<User> {
    const users = await knex('database_epice')
      .update<{ email: string, curso: string}>({ curso })
      .where({ email })

    if (!users) {
      throw new NotFoundException('Esse usuário não está registrado')
    }
    return users
  }
}
