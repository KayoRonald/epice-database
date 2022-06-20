import { Response } from 'express'
import { IUSerRequest } from '../../../types'
import AppError from '../../../middleware/AppError'
import { createUserEpice } from '../../services'
import { createUserValidate } from '../../../Yup/yup'

export class CreateUserController {
  async create (req: IUSerRequest, res: Response) {
    const { name, email, curso } = req.body

    try {
      await createUserValidate.validate(
        { name, email, curso },
        {
          abortEarly: false
        }
      )
    } catch (error: any) {
      throw new AppError(error.message)
    }

    await createUserEpice.execute({ name, email, curso })
    return res.status(201).json({
      success: true,
      message: 'Inscrição realizada com sucesso!'
    })
  }
}
