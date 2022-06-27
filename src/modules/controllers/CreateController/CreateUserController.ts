import { Response } from 'express'
import { IUSerRequest } from '../../../types'
import { createUserEpice } from '../../services'

export class CreateUserController {
  async create (req: IUSerRequest, res: Response) {
    const { name, email, curso } = req.body

    await createUserEpice.execute({ name, email, curso })
    return res.status(201).json({
      success: true,
      message: 'Inscrição realizada com sucesso!'
    })
  }
}
