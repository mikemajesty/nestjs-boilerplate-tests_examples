import { Injectable } from '@nestjs/common';
import { ISecretsService } from './adapter';
import { Secrets, Variables } from './secrets';

@Injectable()
export class SecretsService extends Secrets implements ISecretsService {
  ENV = this.getEnv(Variables.ENV);
  PORT = this.getEnv(Variables.PORT) || 3000;
  url = {
    HELLO_WORD: this.getEnv(Variables.HELLO_WORD),
  };
}
