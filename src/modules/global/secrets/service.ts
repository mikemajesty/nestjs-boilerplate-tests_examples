import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ISecretsService } from './adapter';

export enum Variables {
  ENV = 'ENV',
  PORT = 'PORT',
  HELLO_WORD_SERVICE = 'HELLO_WORD_SERVICE',
}

@Injectable()
export class SecretsService extends ConfigService implements ISecretsService {
  constructor() {
    super();
  }

  ENV = this.get<string>(Variables.ENV);
  PORT = this.get<number>(Variables.PORT) || 3000;
  url = {
    HELLO_WORD_SERVICE: this.get<string>(Variables.HELLO_WORD_SERVICE),
  };
}
