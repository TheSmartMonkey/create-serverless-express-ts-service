import { IsNotEmpty, IsString } from "class-validator";

export class GetTodoByIdTodoParamsDto {
  @IsNotEmpty()
  @IsString()
  todoId: string;
}

export class GetTodoByIdTodoQueryParamsDto {}

export class GetTodoByIdTodoBodyDto {}
