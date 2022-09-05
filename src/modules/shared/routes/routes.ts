import { Router } from 'express'
import authMiddleware from '../../../middleware/authentication/auth'
import { epiceRouter, authRouter } from '../../routes'

const routes = Router()

routes.use('auth', authRouter)
// routes.use(['/admin', '/admins'], authMiddleware, adminMiddleware, adminRouter)
routes.use('/epice', authMiddleware, epiceRouter)

export default routes
