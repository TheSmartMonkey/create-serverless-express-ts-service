import { TodoDao } from '@db/todo/todo.dao';
import { createTodoDb } from '@db/todo/todo.db';
import { UserDao } from '@db/user/user.dao';
import { CreateTodoDto } from '../dtos/create-todo.dto';

export async function createTodoWithUserEmailAsTitleService(data: CreateTodoDto, user: UserDao): Promise<TodoDao> {
  return createTodoDb({ ...data, title: user.email });
}
