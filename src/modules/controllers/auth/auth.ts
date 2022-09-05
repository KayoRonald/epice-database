import * as bcrypt from 'bcrypt'
import { Response } from 'express'
import jwt from 'jsonwebtoken'
import { Authorized } from '../../../common/exceptions'
import env from '../../../config/env'
import { prisma } from '../../../prisma/prisma.service'

const authCtrl = async (req: any, res: Response) => {
  const { username: emailLogin, password } = req.body

  const user: any = await prisma.admin.findFirst({
    where: {
      email: emailLogin
    }
  })
  if (!user) {
    throw new Authorized('Usuário ou senha incorretos')
  }

  const passwordValidation = await bcrypt.compare(
    password,
    user.password
  )

  if (!passwordValidation) {
    throw new Authorized('Usuário ou senha incorretos')
  }

  const id: string = user.id
  const name: string = user.name
  const email: string = user.email
  const role: any = user.role
  const token = jwt.sign({ id, name, email, role }, String(env.jwtSecret), {
    expiresIn: 24 * 60 * 60
  })
  return res.json({ token })
}

export default authCtrl
