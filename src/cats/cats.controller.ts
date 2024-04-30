import { HttpExceptionFilter } from './../http-exception.filter';
import { Cat, CatsService } from './cats.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}

  @Get()
  getCats(): Cat[] | void {
    try {
      this.CatsService.getCats();
    } catch (error) {
      throw new HttpException(
        'Api is broken',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  @HttpCode(200)
  getCatById(@Param('id') id: string): Cat | void {
    try {
      this.CatsService.getCatById(id);
    } catch (error) {
      throw new HttpException(
        'Api is broken',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post()
  @HttpCode(201)
  createCatById(@Body() body: { name: string }) {
    try {
      this.CatsService.createCatById(body);
      return '고양이를 성공적으로 추가했습니다.';
    } catch (error) {
      throw new HttpException(
        'Api is broken',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  @HttpCode(201)
  updateCatById(@Param('id') id: string, @Body() body: { name: string }) {
    try {
      this.CatsService.updateCatById(id, body);
      return '고양이의 이름을 성공적으로 수정했습니다.';
    } catch (error) {
      throw new HttpException(
        'Api is broken',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  @HttpCode(201)
  deleteCatById(@Param('id') id: string) {
    try {
      this.CatsService.deleteCatById(id);
      return '고양이를 성공적으로 삭제했습니다.';
    } catch (error) {
      throw new HttpException(
        'Api is broken',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
