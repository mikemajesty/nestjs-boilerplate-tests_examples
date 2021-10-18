import { Test, TestingModule } from '@nestjs/testing';
import { Settings } from '../../../config/settings';
import { LoggerService } from '../../common/logger/service';
import { HealthController } from '../controller';
import { HealthService } from '../service';

describe('HealthController', () => {
  let appController: HealthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        {
          provide: HealthService,
          useValue: {
            getText: () => 'Hello Word!',
          },
        },
        LoggerService,
        Settings,
      ],
    }).compile();

    appController = app.get<HealthController>(HealthController);
  });

  describe('getGealth', () => {
    it(`should return Hello Word!`, () => {
      expect(appController.getHealth()).toBe('Hello Word!');
    });
  });
});
