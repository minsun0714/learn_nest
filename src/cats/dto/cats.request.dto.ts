import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CatRequestDto {
  @ApiProperty({
    example: '김아무개',
    description: 'name',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'abcde123@naver.com',
    description: 'email',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    example: 'qwe13579',
    description: 'email',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
