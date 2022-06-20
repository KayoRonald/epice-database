import { Response } from 'express'
import { IUSerRequest } from '../../../types'
import AppError from '../../../middleware/AppError'
import { updateCurso } from '../../services'
import { updateCursoValidate } from '../../../Yup/yup'

export class UpdateUserControllerCurso {
  async update (req: IUSerRequest, res: Response) {
    const { email } = req.params
    const { curso } = req.body
    const data = { curso, email }
    console.log(data)
    try {
      await updateCursoValidate.validate({ email, curso }, {
        abortEarly: false
      })
    } catch (error: any) {
      throw new AppError(error.message)
    }
    await updateCurso.execute({ email, curso })

    return res.status(201).json({
      success: true,
      message: 'Atualização feita com sucesso!'
    })
  }
}
