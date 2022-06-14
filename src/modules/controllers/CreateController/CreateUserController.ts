import { Response } from 'express'
import * as Yup from 'yup'
import { IUSerRequest } from '../../../types'
import AppError from '../../../middleware/AppError'
import { createUserEpice } from '../../services'

export class CreateUserController {
  async create (req: IUSerRequest, res: Response) {
    const { name, email, curso } = req.body
    const schema = Yup.object().shape({
      name: Yup.string().required('Campo obrigatório'),
      curso: Yup.string().required('Campo obrigatório'),
      email: Yup.string()
        .email('Email inválido!')
        .required('Campo obrigatório')
    })

    try {
      await schema.validate(
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
