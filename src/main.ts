import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.APP_PORT ?? 3000);

  Logger.log(`Server running on ${process.env.APP_URL ?? 'http://localhost:'}${process.env.APP_PORT ?? 3000}`, 'Running Port');
}
bootstrap();
