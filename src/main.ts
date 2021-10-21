import { RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppExceptionFilter } from './filters/http-exception.filter';
import { ExceptionInterceptor } from './interceptors/http-exception.interceptor';
import { AppModule } from './modules/app.module';
import { LoggerService } from './modules/global/logger/service';
import { SecretsService } from './modules/global/secrets/service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useGlobalFilters(new AppExceptionFilter());
  app.useGlobalInterceptors(new ExceptionInterceptor());

  const loggerService = new LoggerService(new SecretsService());
  app.useLogger(loggerService);

  app.setGlobalPrefix('api', {
    exclude: [{ path: 'health', method: RequestMethod.GET }],
  });

  const { ENV, PORT } = new SecretsService();

  loggerService.log(
    `API listening at ${PORT} on ${ENV?.toUpperCase()} 🚀\n`,
    'Started....',
  );

  await app.listen(PORT);
}

bootstrap();
