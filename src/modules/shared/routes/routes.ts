import { Router } from 'express'
import { ListServiceUserController } from '../../controllers/ListServiceUserController'
import { CreateUserController } from '../../controllers/CreateUserController'
import { DeleterControllerUser } from '../../controllers/DeleterControllerUser'
import { UpdateUserControllerName } from '../../controllers/UpdateUserControllerName'
import { UpdateUserControllerCurso } from '../../controllers/UpdateUserControllerCurso'

const routes = Router()

const ListUser = new ListServiceUserController()
const CreateUser = new CreateUserController()
const DeleteUser = new DeleterControllerUser()
const UpdateName = new UpdateUserControllerName()
const UpdateCurso = new UpdateUserControllerCurso()

export default routes
  .get('/epice', ListUser.handle)
  .post('/epice', CreateUser.create)
  .put('/epice/:email', UpdateName.update)
  .patch('/epice/:email', UpdateCurso.update)
  .delete('/epice/:email', DeleteUser.delete)