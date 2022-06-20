import { Request, Response } from 'express'
import { listUserEpice } from '../../services'

export class ListServiceUserController {
  async handle (req: Request, res: Response) {
    const result = await listUserEpice.execute()
    return res.status(String(result).length ? 201 : 404).json({
      message: String(result).length
        ? result
        : 'Ops... lamentamos, mas nenhum usuário foi registrado! Seja o primeiro a se registra-se'
    })
  }
}
