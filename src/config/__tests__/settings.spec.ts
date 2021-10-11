import { Settings } from '../settings';

describe('[config/settings]', () => {
  let settings: Settings;

  beforeEach(() => {
    settings = new Settings();
  });

  describe('Settings', () => {
    test('should Settings successfully', () => {
      expect(settings.ENV).toEqual('test');
      expect(settings.PORT).toEqual(3000);
    });
  });
});
