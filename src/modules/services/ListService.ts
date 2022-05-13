import knex from '../../database/connection';

export default class ListService {
  public async execute(): Promise<void> {
    
    const users: any = await knex('database_epice')
    .from('database_epice')
    .select('id','name', 'curso', 'created_at')
      .orderBy('id')

    knex.destroy()    
    return users;
  }
}