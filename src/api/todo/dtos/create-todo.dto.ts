import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTodoParamsDto {}

export class CreateTodoQueryParamsDto {}

export class CreateTodoBodyDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  step: number;
}
