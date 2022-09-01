import { Request, Response } from 'express'
import { prisma } from '../../../prisma/prisma.service'

export class ListServiceUserController {
  async handle (req: Request, res: Response) {
    const list = await prisma.users.findMany()
    return res.status(201).json({
      message: list.length ? 'sim' : 'não'
    })
  }
}
