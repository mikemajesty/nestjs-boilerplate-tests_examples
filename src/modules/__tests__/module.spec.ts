import { Test, TestingModule } from '@nestjs/testing';

import { AppModule } from '../app.module';

describe('AppModule', () => {
  let appModule: AppModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppModule],
    }).compile();

    appModule = app.get<AppModule>(AppModule);
  });

  it('should be defined', () => {
    expect(appModule).toBeInstanceOf(AppModule);
  });
});
