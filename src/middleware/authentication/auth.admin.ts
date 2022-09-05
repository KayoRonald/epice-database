import { NextFunction, Response } from 'express'
import { IRequestAdmin } from '../../@types'
import { Authorized, Forbidden } from '../../common/exceptions'
import env from '../../config/env'

const adminMiddleware = (req: IRequestAdmin, res: Response, next: NextFunction) => {
  if (env.disableAuth) return next()
  if (!req.user) {
    throw new Authorized(
      'É necessário estar autenticado para acessar esta página'
    )
  }
  if (req.user.role === 'admin') return next()
  console.log(req.user.role)
  throw new Forbidden('Você não tem autorização para acessar esta página')
}

export default adminMiddleware
