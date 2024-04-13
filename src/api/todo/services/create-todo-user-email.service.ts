import { TodoDao } from '@db/todo/todo.dao';
import { createTodoDb } from '@db/todo/todo.db';
import { UserDao } from '@db/user/user.dao';
import { CreateTodoBodyDto } from '../dtos/create-todo.dto';

export async function createTodoWithUserEmailAsTitleService({
  body,
  user,
}: {
  body?: CreateTodoBodyDto;
  user?: UserDao;
}): Promise<TodoDao> {
  return createTodoDb({ step: body?.step ?? 1, title: user?.email ?? '' });
}
