import { Request, Response } from 'express'
import  ListService  from '../services/ListService'

export class ListServiceUserController {
  async handle(req: Request, res: Response) {
    const listUserEpice = new ListService()

    const result = await listUserEpice.execute()

    return res.status(201).json(result)
  }
}