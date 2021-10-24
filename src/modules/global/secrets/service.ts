import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ISecretsService } from './adapter';

export enum Variables {
  ENV = 'ENV',
  PORT = 'PORT',
  HELLO_WORD_SERVICE = 'HELLO_WORD_SERVICE',
  DB_TYPE = 'DB_TYPE',
  DB_HOST = 'DB_HOST',
  DB_USERNAME = 'DB_USERNAME',
  DB_PASSWORD = 'DB_PASSWORD',
  DB_DATABASE = 'DB_DATABASE',
}

@Injectable()
export class SecretsService extends ConfigService implements ISecretsService {
  constructor() {
    super();
  }

  ENV = this.get<string>(Variables.ENV);
  PORT = this.get<number>(Variables.PORT) || 3000;
  IS_NOT_PRODUCTION = this.get<string>(Variables.ENV) !== 'prd';

  db = {
    TYPE: this.get<string>(Variables.DB_TYPE),
    HOST: this.get<string>(Variables.DB_HOST),
    USERNAME: this.get<string>(Variables.DB_USERNAME),
    PASSWORD: this.get<string>(Variables.DB_PASSWORD),
    DATABASE: this.get<string>(Variables.DB_DATABASE),
  };

  url = {
    HELLO_WORD_SERVICE: this.get<string>(Variables.HELLO_WORD_SERVICE),
  };
}
