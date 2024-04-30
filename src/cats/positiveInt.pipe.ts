import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class PositiveIntegerPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (value < 0) {
      throw new HttpException(
        'id가 유효하지 않습니다.',
        HttpStatus.BAD_REQUEST,
      );
    }
    return value;
  }
}
