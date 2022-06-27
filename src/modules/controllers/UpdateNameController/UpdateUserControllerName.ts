import { Response } from 'express'
import { IUSerRequest } from '../../../types'
import { updateName } from '../../services'

export class UpdateUserControllerName {
  async update (req: IUSerRequest, res: Response) {
    const { email } = req.params
    const { name } = req.body

    await updateName.execute({ name, email })

    return res.status(201).json({
      success: true,
      message: 'Atualização feita com sucesso!'
    })
  }
}
