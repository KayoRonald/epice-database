import { Router } from 'express'
import {
  CreateUser,
  DeleteUser,
  ListUser,
  UpdateCurso,
  UpdateName,
} from '../../controllers'

const routes = Router()

export default routes
  .get('/epice', ListUser.handle)
  .post('/epice', CreateUser.create)
  .put('/epice/:email', UpdateName.update)
  .patch('/epice/:email', UpdateCurso.update)
  .delete('/epice/:email', DeleteUser.delete)
