import { createTodoDb, getAllTodosDb, getTodoByIdDb } from '@db/todo/todo.db';
import { controllerMiddleware } from '@middlewares/controller.middleware';
import { dtoValidationMiddleware } from '@middlewares/dto-validation.middleware';
import { requireAuthToken } from '@middlewares/require-auth-token.middleware';
import { Router } from 'express';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { GetTodoByIdTodoDto } from './dtos/get-todo-by-id.dto';

const router = Router();

router.get('/', requireAuthToken, controllerMiddleware(getAllTodosDb));
router.get('/todoId/:todoId', requireAuthToken, dtoValidationMiddleware(GetTodoByIdTodoDto), controllerMiddleware(getTodoByIdDb));
router.post('/', requireAuthToken, dtoValidationMiddleware(CreateTodoDto), controllerMiddleware(createTodoDb));

export default router;
