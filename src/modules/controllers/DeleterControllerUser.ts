import { Response } from 'express';
import { IUSerRequest } from '../../interface';
import DeleteUserService from '../services/DeleteUserService';

export class DeleterControllerUser {
  async delete(req: IUSerRequest, res: Response) {
    const { email } = req.params
    const deleteUserService = new DeleteUserService();

    const result = await deleteUserService.execute({email});
    return res.status(201).json({
      success: true,
      message: 'Usuário deletado de nosso sistema.'
    });
  };
};