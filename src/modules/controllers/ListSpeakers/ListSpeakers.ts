import { Request, Response } from 'express'
import { speakersService } from '../../services'

export class ListSpeakers {
  async handle (req: Request, res: Response) {
    const result = await speakersService.execute()
    return res.status(String(result).length ? 201 : 404).json({
      message: String(result).length
        ? result
        : 'Nenhum palestrante foi regisrtado :/'
    })
  }
}
