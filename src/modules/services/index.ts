import CreateUserService from './CreateService/CreateUserService'
import DeleteUserService from './DeleteService/DeleteUserService'
import ListService from './ListService/ListService'
import UpdateUserServiceCurso from './UpdateCursoService/UpdateUserServiceCurso'
import UpdateUserServiceName from './UpdateNameService/UpdateUserServiceName'

export const createUserEpice = new CreateUserService()
export const deleteUserService = new DeleteUserService()
export const listUserEpice = new ListService()
export const updateCurso = new UpdateUserServiceCurso()
export const updateName = new UpdateUserServiceName()
