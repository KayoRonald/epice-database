import { Response } from 'express'
import { IUSerRequest } from '../../../types'
import { deleteUserService } from '../../services'

export class DeleterControllerUser {
  async delete (req: IUSerRequest, res: Response) {
    const { email } = req.params

    await deleteUserService.execute({ email })
    return res.status(201).json({
      success: true,
      message: 'Usuário deletado de nosso sistema.'
    })
  }
}
