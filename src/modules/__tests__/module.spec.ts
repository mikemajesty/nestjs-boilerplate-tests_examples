import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../module';

describe('HealthController', () => {
  let appModule: AppModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppModule],
    }).compile();

    appModule = app.get<AppModule>(AppModule);
  });

  describe('AppModule', () => {
    it('should verify instanceOf "AppModule"', () => {
      expect(appModule).toBeInstanceOf(AppModule);
    });
  });
});
