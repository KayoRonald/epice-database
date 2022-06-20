import { Response } from 'express'
import { IUSerRequest } from '../../../types'
import AppError from '../../../middleware/AppError'
import { updateName } from '../../services'
import { updateNameValidate } from '../../../Yup/yup'

export class UpdateUserControllerName {
  async update (req: IUSerRequest, res: Response) {
    const { email } = req.params
    const { name } = req.body
    const data = { name, email }
    console.log(data)

    try {
      await updateNameValidate.validate({ email, name }, {
        abortEarly: false
      })
    } catch (error: any) {
      throw new AppError(error.message)
    }
    await updateName.execute({ name, email })

    return res.status(201).json({
      success: true,
      message: 'Atualização feita com sucesso!'
    })
  }
}
