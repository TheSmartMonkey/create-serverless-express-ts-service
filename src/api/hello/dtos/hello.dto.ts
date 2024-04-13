import { IsNotEmpty, IsString } from 'class-validator';

export class HelloDtoParamsDto {
  @IsNotEmpty()
  @IsString()
  message: string;
}

export class HelloDtoQueryParamsDto {}

export class HelloDtoBodyDto {}
