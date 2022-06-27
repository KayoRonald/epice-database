import { Request, Response } from 'express'
import { NotFoundException } from '../../../middleware/error/AppError'
import { speakersService } from '../../services'

export class ListSpeakers {
  async handle (req: Request, res: Response) {
    const result = await speakersService.execute()
    if (String(result).length) {
      return res.status(201).json({
        message: result
      })
    }
    throw new NotFoundException('Nenhum palestrante foi regisrtado :/')
  }
}
