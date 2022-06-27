import { Response } from 'express'
import { IUSerRequest } from '../../../types'
import { updateCurso } from '../../services'

export class UpdateUserControllerCurso {
  async update (req: IUSerRequest, res: Response) {
    const { email } = req.params
    const { curso } = req.body

    await updateCurso.execute({ email, curso })

    return res.status(201).json({
      success: true,
      message: 'Atualização feita com sucesso!'
    })
  }
}
