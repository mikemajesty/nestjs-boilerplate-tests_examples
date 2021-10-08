import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { AppLogger } from './modules/shared/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useLogger(app.get(AppLogger));
  app.setGlobalPrefix('api');

  await app.listen(3000);
}

bootstrap();
