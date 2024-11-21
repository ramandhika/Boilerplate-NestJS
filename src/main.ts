import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  const port = process.env.APP_PORT ?? 3000;
  const appUrl = process.env.APP_URL ?? 'http://localhost:';
  
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  
  await app.listen(port);

  Logger.log(`Server running on ${appUrl}${port}`, 'Running Port');
}
bootstrap();
