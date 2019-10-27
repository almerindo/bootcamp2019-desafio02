import { Router } from 'express';
import StudentControllers from './app/controllers/StudentControllers';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Este middleare global só funciona para as rotas que estiverem a baixo dele.
// routes.use(authMiddleware);

// Create
routes.post('/students', StudentControllers.store);
// Update
routes.put('/students/:id', StudentControllers.update);
// Get student by ID
routes.get('/students/:id', StudentControllers.retrieve);

// routes.get('/students', StudentControllers.retrieve);

// Delete by id
routes.delete('/students/:id', StudentControllers.delete);

export default routes;
