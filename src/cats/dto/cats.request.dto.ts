import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CatRequestDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsString()
  imgUrl: string;
}
