import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class ReadOnlyCatDto {
  @ApiProperty({
    example: '6630dfa9182bcb2606f4d600',
    description: 'id',
  })
  id: string;

  @ApiProperty({
    example: '김아무개',
    description: 'name',
  })
  name: string;

  @ApiProperty({
    example: 'abcde123@naver.com',
    description: 'email',
  })
  email: string;
}
