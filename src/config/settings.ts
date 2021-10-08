import { Secrets, Variables } from './secrets';

export class Settings extends Secrets {
  ENV = this.getEnv(Variables.ENV);
  PORT = this.getEnv(Variables.PORT) || 3000;
}
