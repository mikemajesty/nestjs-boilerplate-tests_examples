import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from '../controller';
import { HealthService } from '../service';

describe('HealthController', () => {
  let appController: HealthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [HealthService],
    }).compile();

    appController = app.get<HealthController>(HealthController);
  });

  describe('getGealth', () => {
    it(`should return "${new HealthService().getText()}"`, () => {
      expect(appController.getGealth()).toBe(new HealthService().getText());
    });
  });
});
