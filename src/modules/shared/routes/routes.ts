import { Router } from 'express'
import { epiceRouter, authRouter } from '../../routes'

const routes = Router()

// routes.use(['/admin', '/admins'], authMiddleware, adminMiddleware, adminRouter)
routes.use('auth', authRouter)
routes.use('/epice', epiceRouter)

export default routes
