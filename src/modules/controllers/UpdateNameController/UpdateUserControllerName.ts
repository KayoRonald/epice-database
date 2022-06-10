import { Response } from 'express'
import * as Yup from 'yup'
import { IUSerRequest } from '../../../types'
import AppError from '@middleware/AppError'
import { updateName } from '../../services'

export class UpdateUserControllerName {
  async update(req: IUSerRequest, res: Response) {
    const { email } = req.params
    const { name } = req.body
    const data = { name, email }
    console.log(data)

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email('Email inválido!').required(),
    })

    try {
      await schema.validate(data, {
        abortEarly: false,
      })
    } catch (error: any) {
      throw new AppError(error.message)
    }
    await updateName.execute({ name, email })

    return res.status(201).json({
      success: true,
      message: 'Atualização feita com sucesso!',
    })
  }
}
