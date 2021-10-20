import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ISecretsService } from './adapter';

export enum Variables {
  ENV = 'ENV',
  PORT = 'PORT',
  HELLO_WORD_SERVICE = 'HELLO_WORD_SERVICE',
}

@Injectable()
export class SecretsService implements ISecretsService {
  private configService: ConfigService = new ConfigService();

  ENV = this.configService.get<string>(Variables.ENV);
  PORT = this.configService.get<number>(Variables.PORT) || 3000;
  url = {
    HELLO_WORD_SERVICE: this.configService.get<string>(
      Variables.HELLO_WORD_SERVICE,
    ),
  };
}
