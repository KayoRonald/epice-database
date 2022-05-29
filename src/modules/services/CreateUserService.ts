import knex from '../../connection/connection';
import AppError from '../../middleware/AppError';

type User = {
  name: string;
  email: string;
  curso: string;
};

export default class CreateUserService {
  public async execute({ name, email, curso }: User): Promise<User> {
    const data = {
      name,
      email,
      curso
    };
    // Verificando se o email já está registrado
    const users: any = await knex('database_epice')
      .from<User>('database_epice')
      .where({ email });

    if (users.length === 1) {
      throw new AppError(`Email já cadastrado`);
    }
    const response = await knex('database_epice').insert<User>(data);

    // knex.destroy()
    return response;
  }
}
