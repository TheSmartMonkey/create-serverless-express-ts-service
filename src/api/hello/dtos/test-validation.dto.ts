import { IsNotEmpty, IsString } from 'class-validator';

export class TestValidationParamsDto {
  @IsNotEmpty()
  @IsString()
  message: string;
}

export class TestValidationQueryParamsDto {}

export class TestValidationBodyDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}
