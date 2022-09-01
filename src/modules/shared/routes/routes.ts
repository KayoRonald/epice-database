import { Router } from 'express'
import {
  ListUser
} from '../../controllers'

const routes = Router()

export default routes
  .get('/epice', ListUser.handle)
