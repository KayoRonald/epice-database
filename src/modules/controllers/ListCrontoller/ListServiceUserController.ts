import { Request, Response } from 'express'
import { NotFoundException } from '../../../middleware/error/AppError'
import { listUserEpice } from '../../services'

export class ListServiceUserController {
  async handle (req: Request, res: Response) {
    const result = await listUserEpice.execute()
    if (String(result).length) {
      return res.status(201).json({
        message: result
      })
    }
    throw new NotFoundException('Nenhum palestrante foi regisrtado :/')
  }
}
