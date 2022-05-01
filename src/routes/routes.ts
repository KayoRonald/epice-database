import { Router } from 'express';
import UserController from '../controllers/UserController';

const routes = Router();

routes.get('/epice', UserController.index);
routes.post('/epice', UserController.create);
routes.put('/epice/:id', UserController.update);
routes.delete('/epice/:id', UserController.delete);

export default routes;