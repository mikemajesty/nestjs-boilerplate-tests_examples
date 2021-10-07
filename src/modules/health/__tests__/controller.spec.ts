import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from '../controller';

describe('HealthController', () => {
  let appController: HealthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
    }).compile();

    appController = app.get<HealthController>(HealthController);
  });

  describe('getGealth', () => {
    it('should return "Boilerplate UP!!!"', () => {
      expect(appController.getGealth()).toBe('Boilerplate UP!!!');
    });
  });
});
