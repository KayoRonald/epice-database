import knex from '../../database/connection'
import AppError from '../../middleware/AppError'

interface User {
  name: string
  email: string
  curso?: string
}

export default class UpdateUserServiceName {
  public async execute({ email, name }: User): Promise<void> {
    const users = await knex('database_epice')
      .from('database_epice')
      .update({ name })
      .where({ email })

    if (users === 0) {
      throw new AppError(`Esse email não está registrado`, 404)
    }
    // knex.destroy()    
    return
  }
}