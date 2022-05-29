import { Response } from 'express'
import * as Yup from 'yup'
import { IUSerRequest } from '../../interface'
import AppError from '../../middleware/AppError'
import { updateCurso } from '../services';

export class UpdateUserControllerCurso {
  async update(req: IUSerRequest, res: Response) {
    const { email } = req.params;
    const { curso } = req.body
    const data = { curso, email }
    console.log(data)

    const schema = Yup.object().shape({
      curso: Yup.string().required('Campo obrigatório'),
      email: Yup.string().email('Email inválido!').required('Campo obrigatório'),
    })

    try {
      await schema.validate(data, {
        abortEarly: false,
      })
    } catch (error: any) {
      throw new AppError(error.message)
    }

    await updateCurso.execute({ email, curso });

    return res.status(201).json({
      success: true,
      message: `Atualização feita com sucesso!`
    })
  }
}