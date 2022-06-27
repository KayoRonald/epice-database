import { Router } from 'express'
import validate from '../../../middleware/validation/validateRequest'
import {
  CreateUser,
  DeleteUser,
  ListUser,
  UpdateCurso,
  UpdateName,
  ListSpeaker
} from '../../controllers'
// Vadlidação no Yup
import {
  createSchema,
  updateCursoSchema,
  updateNameShema,
  deleteUserSchema
} from '../../../schema'

const routes = Router()

export default routes
  .get('/speaker', ListSpeaker.handle)
  .get('/epice', ListUser.handle)
  .post('/epice', validate(createSchema), CreateUser.create)
  .put('/epice/name/:email', validate(updateNameShema), UpdateName.update)
  .put('/epice/curso/:email', validate(updateCursoSchema), UpdateCurso.update)
  .delete('/epice/:email', validate(deleteUserSchema), DeleteUser.delete)
