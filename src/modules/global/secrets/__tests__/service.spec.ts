import { Test } from '@nestjs/testing';
import { ISecretsService } from '../adapter';
import { SecretsService } from '../service';

describe('Settings', () => {
  let settings: ISecretsService;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      providers: [
        {
          provide: ISecretsService,
          useClass: SecretsService,
        },
      ],
    }).compile();

    settings = app.get(ISecretsService);
  });

  describe('Settings', () => {
    test('should Settings successfully', () => {
      expect(settings.ENV).toEqual('test');
      expect(settings.PORT).toEqual(3000);
      expect(settings.url.HELLO_WORD).toEqual('https://www.hello_word_url.com');
    });
  });
});
