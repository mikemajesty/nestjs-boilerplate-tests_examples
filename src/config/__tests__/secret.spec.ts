import { Secrets, Variables } from '../secrets';

class SecretsStub extends Secrets {}

describe('[config/secrets]', () => {
  let secretsStub: SecretsStub;

  beforeEach(() => {
    secretsStub = new SecretsStub();
  });

  describe('Secrets', () => {
    test('should Secrets successfully', () => {
      const env = secretsStub.getEnv(Variables.ENV);
      expect(env).toEqual('test');
    });
  });
});