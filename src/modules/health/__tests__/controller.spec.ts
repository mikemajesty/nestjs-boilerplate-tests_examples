import { Test, TestingModule } from '@nestjs/testing';
import { LoggerService } from '../../shared/logger/logger.service';
import { HealthController } from '../controller';
import { HealthService } from '../service';

describe('HealthController', () => {
  let appController: HealthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [HealthService, LoggerService],
    }).compile();

    appController = app.get<HealthController>(HealthController);
  });

  describe('getGealth', () => {
    it(`should return "${new HealthService(
      new LoggerService(),
    ).getText()}"`, () => {
      expect(appController.getGealth()).toBe(
        new HealthService(new LoggerService()).getText(),
      );
    });
  });
});
