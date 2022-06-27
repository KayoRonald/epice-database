import knex from '../../../connection/connection'
import { NotFoundException } from '../../../middleware/'

interface User {
  name: string
  email: string
  curso?: string
}

export default class UpdateUserServiceName {
  public async execute ({ email, name }: User): Promise<User> {
    const users: User = await knex('database_epice')
      .update<User>({ name })
      .where({ email })

    if (!users) {
      throw new NotFoundException('Esse usuário não está registrado')
    }

    return users
  }
}
