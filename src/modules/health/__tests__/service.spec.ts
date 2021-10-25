import { Test } from '@nestjs/testing';

import { IHttpService } from '../../common/http/adapter';
import { HttpService } from '../../common/http/service';
import { ILoggerService } from '../../global/logger/adapter';
import { LoggerService } from '../../global/logger/service';
import { ISecretsService } from '../../global/secrets/adapter';
import { SecretsService } from '../../global/secrets/service';
import { IHealthService } from '../adapter';
import { HealthService } from '../service';

describe('HealthService', () => {
  let healthService: IHealthService;
  let httpService: IHttpService;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      providers: [
        {
          provide: IHealthService,
          useClass: HealthService,
        },
        {
          provide: ISecretsService,
          useClass: SecretsService,
        },
        {
          provide: ILoggerService,
          useClass: LoggerService,
        },
        {
          provide: IHttpService,
          useClass: HttpService,
        },
      ],
    }).compile();

    healthService = app.get(IHealthService);
    httpService = app.get(IHttpService);
  });

  describe('getText', () => {
    test('should getText successfully', async () => {
      httpService.http.get = jest.fn().mockResolvedValue({
        data: { message: 'Hello Word!' },
      });

      await expect(healthService.getText()).resolves.toEqual('Hello Word!');
    });
  });
});
