import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { Cat } from '../cats.schema';

export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: '6630dfa9182bcb2606f4d600',
    description: 'id',
  })
  id: string;
}
