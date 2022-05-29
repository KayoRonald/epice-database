import { Request, Response } from 'express';
import { listUserEpice } from '../services';

export class ListServiceUserController {
  async handle(req: Request, res: Response) {
    const result = await listUserEpice.execute();
    return res.status(String(result).length ? 201 : 404).json({
      message: String(result).length ? result : 'Não tem nenhum usuario cadastrado'
    });
  }
}