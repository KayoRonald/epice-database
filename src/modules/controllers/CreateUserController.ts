import { Response } from 'express'
import { IUSerRequest } from '../../interface'
import  CreateUserService  from '../services/CreateUserService'

export class CreateUserController {
  async create(req: IUSerRequest, res: Response) {
    const {
      name,
      email,
      curso
    } = req.body
    
    const createUserEpice = new CreateUserService()
    const result = await createUserEpice.execute({name, email, curso})

    return res.status(201).json({
      success: true,
      message: `Inscrição realizada com sucesso!`
    })
  }
}