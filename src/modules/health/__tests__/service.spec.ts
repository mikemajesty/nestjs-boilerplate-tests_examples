import { Test } from '@nestjs/testing';
import { Settings } from '../../../config/settings';
import { HttpService } from '../../common/http/service';
import { LoggerService } from '../../common/logger/service';
import { HealthService } from '../service';

describe('HealthService', () => {
  let healthService: HealthService;
  let httpService: HttpService;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      providers: [HealthService, LoggerService, Settings, HttpService],
    }).compile();

    healthService = app.get(HealthService);
    httpService = app.get(HttpService);
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
