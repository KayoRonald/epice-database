import knex from '../../../connection/connection'
import { BadRequestException } from '../../../middleware/'

type User = {
  name: string;
  email: string;
  curso: string;
};

export default class CreateUserService {
  public async execute ({ name, email, curso }: User): Promise<User> {
    const data = {
      name,
      email,
      curso
    }
    // Verificando se o email já está registrado
    const users: any = await knex<User>('database_epice')
      .where({ email })

    if (users.length === 1) {
      throw new BadRequestException('Esse endereço de email já está em uso')
    }
    const response = await knex('database_epice').insert<User>(data)
    return response
  }
}
