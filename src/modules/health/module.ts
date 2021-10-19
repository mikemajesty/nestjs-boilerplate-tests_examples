import { Module } from '@nestjs/common';
import { IHttpService } from '../common/http/adapter';
import { HttpService } from '../common/http/service';
import { ILoggerService } from '../global/logger/adapter';
import { LoggerService } from '../global/logger/service';
import { ISecretsService } from '../global/secrets/adapter';
import { SecretsService } from '../global/secrets/service';
import { IHealthService } from './adapter';
import { HealthController } from './controller';
import { HealthService } from './service';

@Module({
  controllers: [HealthController],
  providers: [
    {
      provide: IHealthService,
      useClass: HealthService,
    },
    {
      provide: ILoggerService,
      useClass: LoggerService,
    },
    {
      provide: ISecretsService,
      useClass: SecretsService,
    },
    {
      provide: IHttpService,
      useClass: HttpService,
    },
  ],
})
export class HealthModule {}
