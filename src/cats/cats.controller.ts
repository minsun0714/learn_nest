import { Cat, CatsService } from './cats.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}

  @Get()
  @HttpCode(200)
  getCats(): Cat[] {
    return this.CatsService.getCats();
  }

  @Get(':id')
  @HttpCode(200)
  getCatById(@Param('id') id: string): Cat | undefined {
    console.log('📢[cats.controller.ts:15]: id: ', id);
    return this.CatsService.getCatById(id);
  }

  @Post()
  @HttpCode(201)
  createCatById(@Body() body: { name: string }) {
    this.CatsService.createCatById(body);
    return '고양이를 성공적으로 추가했습니다.';
  }

  @Put(':id')
  @HttpCode(201)
  updateCatById(@Param('id') id: string, @Body() body: { name: string }) {
    this.CatsService.updateCatById(id, body);
    return '고양이의 이름을 성공적으로 수정했습니다.';
  }

  @Delete(':id')
  @HttpCode(201)
  deleteCatById(@Param('id') id: string) {
    this.CatsService.deleteCatById(id);
    return '고양이를 성공적으로 삭제했습니다.';
  }
}
