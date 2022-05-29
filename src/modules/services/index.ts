import CreateUserService from './CreateUserService';
import DeleteUserService from './DeleteUserService';
import ListService from './ListService';
import UpdateUserServiceCurso from './UpdateUserServiceCurso';
import UpdateUserServiceName from './UpdateUserServiceName';

export const createUserEpice = new CreateUserService();
export const deleteUserService = new DeleteUserService();
export const listUserEpice = new ListService();
export const updateCurso = new UpdateUserServiceCurso();
export const updateName = new UpdateUserServiceName();
