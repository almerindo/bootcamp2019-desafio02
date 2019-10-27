import { Router } from 'express';

// Autenticacao e controle de usuários
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

// Controller dos students
import StudentControllers from './app/controllers/StudentControllers';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.put('/users', UserController.update);

// Este middleare global só funciona para as rotas que estiverem a baixo dele.
// routes.use(authMiddleware);

// Create
routes.post('/students', StudentControllers.store);

// Update
routes.put('/students/:id', StudentControllers.update);

// Get student by ID
routes.get('/students/:id', StudentControllers.retrieve);

// Get all students
routes.get('/students', StudentControllers.retrieve);

// Delete by id
routes.delete('/students/:id', StudentControllers.delete);

export default routes;
