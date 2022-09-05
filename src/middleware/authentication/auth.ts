import { NextFunction, Response } from 'express'
import jwt from 'jsonwebtoken'
import { IRequestAdmin } from '../../@types'
import { Authorized } from '../../common/exceptions'
import env from '../../config/env'

const authMiddleware = (req: IRequestAdmin, res: Response, next: NextFunction) => {
  if (env.disableAuth) return next()
  const [, token]: any = req.headers.authorization?.split(' ')
  if (!token) {
    throw new Authorized('Sessão expirada')
  }
  try {
    const payload: any = jwt.verify(String(token), String(env.jwtSecret))
    req.user = payload
    console.log(payload)
    next()
  } catch (error: any) {
    console.log(error)
  }
}

export default authMiddleware
