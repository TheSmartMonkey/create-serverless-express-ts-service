import { createTodoDb, getAllTodosDb, getTodoByIdDb } from '@db/todo/todo.db';
import { controller } from '@middlewares/controller.middleware';
import { dtoValidation } from '@middlewares/dto-validation.middleware';
import { requireAuthToken } from '@middlewares/require-auth-token.middleware';
import { Router } from 'express';
import { CreateTodoBodyDto } from './dtos/create-todo.dto';
import { GetTodoByIdTodoParamsDto } from './dtos/get-todo-by-id.dto';
import { createTodoWithUserEmailAsTitleService } from './services/create-todo-user-email.service';

const router = Router();

router.get('/', requireAuthToken, controller(getAllTodosDb));
router.get('/todoId/:todoId', requireAuthToken, dtoValidation({ params: GetTodoByIdTodoParamsDto }), controller(getTodoByIdDb));
router.post('/', requireAuthToken, dtoValidation({ body: CreateTodoBodyDto }), controller(createTodoDb));
router.post('/user-email', requireAuthToken, dtoValidation({ body: CreateTodoBodyDto }), controller(createTodoWithUserEmailAsTitleService));

export default router;
