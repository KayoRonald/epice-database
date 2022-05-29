import knex from '../../connection/connection';
import AppError from '../../middleware/AppError';

interface User {
  email: string;
  curso: string;
}

export default class UpdateUserServiceCurso {
  public async execute({ email, curso }: User): Promise<User> {
    const users = await knex('database_epice')
      .from('database_epice')
      .update<User>({ curso })
      .where({ email });

    if (!users) {
      throw new AppError(`Esse email não está registrado`, 404);
    }
    // knex.destroy()
    return users;
  }
}
