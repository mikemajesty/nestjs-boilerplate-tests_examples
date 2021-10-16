import { Test, TestingModule } from '@nestjs/testing';
import { LoggerService } from '../../common/logger/service';
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
    it(`should return "nestjs-boilerplate-api UP!!!"`, () => {
      expect(appController.getHealth()).toBe(
        new HealthService(new LoggerService()).getText(),
      );
    });
  });
});
