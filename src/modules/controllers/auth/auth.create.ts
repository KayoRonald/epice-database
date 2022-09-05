import { Request, Response } from 'express'
import { BadRequestException } from '../../../common/exceptions'
import { prisma } from '../../../prisma/prisma.service'

interface Amerda extends Request {
  body: {
    name: string
    email: string
    password: string
  }
}
const authCreate = async (req: Amerda, res: Response) => {
  const { name, email, password } = req.body
  try {
    await prisma.admin.create({
      data: {
        name,
        email,
        password
      }
    })
  } catch (error: any) {
    throw new BadRequestException()
  }
  return res.json({ message: 'Admin criado com sucesso!' })
}

export default authCreate
