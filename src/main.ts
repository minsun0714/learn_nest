import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  const PORT = Number(process.env.PORT);
  console.log('📢[main.ts:9]: PORT: ', PORT);
  await app.listen(PORT);
}
bootstrap();
