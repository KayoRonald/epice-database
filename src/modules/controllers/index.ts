import { CreateUserController } from './CreateController/CreateUserController'
import { DeleterControllerUser } from './DeleteController/DeleterControllerUser'
import { ListServiceUserController } from './ListCrontoller/ListServiceUserController'
import { UpdateUserControllerCurso } from './UpdateCursoController/UpdateUserControllerCurso'
import { UpdateUserControllerName } from './UpdateNameController/UpdateUserControllerName'

// Controllers
export const ListUser = new ListServiceUserController()
export const CreateUser = new CreateUserController()
export const DeleteUser = new DeleterControllerUser()
export const UpdateName = new UpdateUserControllerName()
export const UpdateCurso = new UpdateUserControllerCurso()
