import { Test } from '@nestjs/testing';

import { ISecretsService } from '../../../global/secrets/adapter';
import { SecretsService } from '../../../global/secrets/service';
import { DatabaseService } from '../service';

describe('DatabaseService', () => {
  let service: DatabaseService;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      providers: [
        DatabaseService,
        {
          provide: ISecretsService,
          useClass: SecretsService,
        },
      ],
    }).compile();

    service = await app.resolve(DatabaseService);
  });

  describe('getConfig', () => {
    test('should getConfig successfully', () => {
      expect(service.getConfig()).not.toBeUndefined();
    });
  });
});
