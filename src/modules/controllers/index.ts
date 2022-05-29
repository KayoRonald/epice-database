import { CreateUserController } from './CreateUserController';
import { DeleterControllerUser } from './DeleterControllerUser';
import { ListServiceUserController } from './ListServiceUserController';
import { UpdateUserControllerCurso } from './UpdateUserControllerCurso';
import { UpdateUserControllerName } from './UpdateUserControllerName';

// Controllers
export const ListUser = new ListServiceUserController();
export const CreateUser = new CreateUserController();
export const DeleteUser = new DeleterControllerUser();
export const UpdateName = new UpdateUserControllerName();
export const UpdateCurso = new UpdateUserControllerCurso();
