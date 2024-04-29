import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:id/:name')
  getHello(
    @Req() req: Request,
    @Body() body: any,
    @Param('id') id: string,
    @Param('name') name: string,
  ): string {
    console.log(id);
    console.log(name);
    return this.appService.getHello();
  }
}
