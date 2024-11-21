import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import helmet from 'helmet';
import { AuthMiddleware } from './common/middleware/auth.middleware';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const globalPrefix = 'api';
    const port = process.env.APP_PORT ?? 3000;
    const appUrl = process.env.APP_URL ?? 'http://localhost:';

    app.setGlobalPrefix(globalPrefix);
    app.use(helmet());
    app.enableCors();
    app.use(AuthMiddleware);

    await app.listen(port);

    Logger.log(`Server running on ${appUrl}${port}`, 'Running Port');
}
bootstrap();
