import { NestFactory } from '@nestjs/core';
import { Settings } from './config/settings';
import { AppModule } from './modules/app.module';
import { LoggerService } from './modules/shared/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useLogger(new LoggerService());
  app.setGlobalPrefix('api');

  const logger = new LoggerService('Start');

  const { ENV, PORT } = new Settings();

  logger.log(`API listening at ${PORT} on ${ENV.toUpperCase()} 🚀\n`);
  await app.listen(PORT);
}

bootstrap();
