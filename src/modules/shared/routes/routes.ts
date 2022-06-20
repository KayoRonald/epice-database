import { Router } from 'express'
import {
  CreateUser,
  DeleteUser,
  ListUser,
  UpdateCurso,
  UpdateName,
  ListSpeaker
} from '../../controllers'

const routes = Router()

export default routes
  .get('/speaker', ListSpeaker.handle)
  .get('/epice', ListUser.handle)
  .post('/epice', CreateUser.create)
  .put('/epice/name/:email', UpdateName.update)
  .put('/epice/curso/:email', UpdateCurso.update)
  .delete('/epice/:email', DeleteUser.delete)
