import { Injectable, Scope } from '@nestjs/common';
import { Secrets, Variables } from './secrets';

@Injectable({ scope: Scope.TRANSIENT })
export class Settings extends Secrets {
  ENV = this.getEnv(Variables.ENV);
  PORT = this.getEnv(Variables.PORT) || 3000;
}
