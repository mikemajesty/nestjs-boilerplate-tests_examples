import { Test, TestingModule } from '@nestjs/testing';

import { DataBaseModule } from '../module';

describe('DataBaseModule', () => {
  let dataBaseModule: DataBaseModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [DataBaseModule],
    }).compile();

    dataBaseModule = app.get<DataBaseModule>(DataBaseModule);
  });

  it('should be defined', () => {
    expect(dataBaseModule).toBeInstanceOf(DataBaseModule);
  });
});
