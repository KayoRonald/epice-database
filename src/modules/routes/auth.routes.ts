import { Router } from 'express'
import authCtrl from '../controllers/auth/auth'
import authCreate from '../controllers/auth/auth.create'

const routes = Router()

routes.post('/', authCtrl)
routes.post('/create', authCreate)

export default routes
