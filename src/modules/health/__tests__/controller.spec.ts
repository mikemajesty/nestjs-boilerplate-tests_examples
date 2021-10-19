import { Test, TestingModule } from '@nestjs/testing';
import { Settings } from '../../../config/settings';
import { LoggerService } from '../../common/logger/service';
import { HealthController } from '../controller';
import { HealthService } from '../service';

const text = 'Hello Word!';

describe('HealthController', () => {
  let appController: HealthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        {
          provide: HealthService,
          useValue: {
            getText: () => text,
          },
        },
        LoggerService,
        Settings,
      ],
    }).compile();

    appController = app.get<HealthController>(HealthController);
  });

  describe('getGealth', () => {
    it(`should return ${text}`, () => {
      expect(appController.getHealth()).toBe(text);
    });
  });
});
