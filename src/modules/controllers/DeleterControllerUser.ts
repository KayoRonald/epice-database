import { Response } from 'express'
import * as Yup from 'yup';
import { IUSerRequest } from '../../interface'
import AppError from '../../middleware/AppError';
import DeleteUserService from '../services/DeleteUserService'

export class DeleterControllerUser {
  async delete(req: IUSerRequest, res: Response) {
    const { email } = req.params
    const deleteUserService = new DeleteUserService()

    const schema = Yup.object().shape({
      email: Yup.string().email('Email inválido!').required('Campo obrigatório'),
    })

    try {
      await schema.validate(email, {
        abortEarly: false,
      })
    } catch (error: any) {
      throw new AppError(error.message)
    }
    
    await deleteUserService.execute({email});
    return res.status(201).json({
      success: true,
      message: 'Usuário deletado de nosso sistema.'
    });
  };
};