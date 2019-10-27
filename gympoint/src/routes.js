import { Router } from 'express';
import StudentControllers from './app/controllers/StudentControllers';

const routes = new Router();

routes.post('/students', StudentControllers.store);

export default routes;
