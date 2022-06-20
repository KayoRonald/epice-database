import knex from '../../../connection/connection'

type Users = {
  id: number;
  name: string;
  curso: string;
  createdAt: string;
};

export default class ListService {
  public async execute (): Promise<Users> {
    const users = await knex('database_epice')
      .from('database_epice')
      .select<Users>('id', 'name', 'curso', 'created_at')
      .orderBy('id')
    return users
  }
}
