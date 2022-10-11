import { NextFunction, Response } from 'express'
import jwt from 'jsonwebtoken'
import { IRequestAdmin } from '../../@types'
import { Authorized } from '../../common/exceptions'
import env from '../../config/env'
import Logger from '../../config/logger'

const authMiddleware = (req: IRequestAdmin, res: Response, next: NextFunction) => {
  if (env.disableAuth) return next()
  const [, token]: any = req.headers.authorization?.split(' ')
  if (!token) {
    throw new Authorized('Sessão expirada')
  }
  try {
    const payload: any = jwt.verify(String(token), String(env.jwtSecret))
    req.user = payload
    Logger.info(payload)
    next()
  } catch (error: any) {
    Logger.error(error)
  }
}

export default authMiddleware
