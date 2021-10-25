import { HttpStatus, RequestMethod, ValidationPipe } from '@nestjs/common';
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

  app.useGlobalPipes(
    new ValidationPipe({ errorHttpStatusCode: HttpStatus.PRECONDITION_FAILED }),
  );

  app.useGlobalFilters(new AppExceptionFilter());
  app.useGlobalInterceptors(new ExceptionInterceptor());

  const { ENV, PORT } = new SecretsService();

  const loggerService = new LoggerService(ENV);
  app.useLogger(loggerService);

  app.setGlobalPrefix('api', {
    exclude: [{ path: 'health', method: RequestMethod.GET }],
  });

  loggerService.log(
    `API listening at ${PORT} on ${ENV?.toUpperCase()} 🚀\n`,
    'Started....',
  );

  await app.listen(PORT);
}

bootstrap();
