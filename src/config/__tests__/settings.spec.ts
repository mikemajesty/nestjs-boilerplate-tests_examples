import { Settings } from '../settings';

describe('Settings', () => {
  let settings: Settings;

  beforeEach(() => {
    settings = new Settings();
  });

  describe('Settings', () => {
    test('should Settings successfully', () => {
      expect(settings.ENV).toEqual('test');
      expect(settings.PORT).toEqual(3000);
      expect(settings.HELLO_WORD_URL).toEqual('https://www.hello_word_url.com');
    });
  });
});
