import { Injectable } from '@nestjs/common';
import { IHttpService } from '../common/http/adapter';
import { ILoggerService } from '../global/logger/adapter';
import { ISecretsService } from '../global/secrets/adapter';
import { IHealthService } from './adapter';

@Injectable()
export class HealthService implements IHealthService {
  constructor(
    private readonly secretService: ISecretsService,
    private readonly loggerService: ILoggerService,
    private readonly httpService: IHttpService,
  ) {}

  async getText(): Promise<string> {
    type HelloWordType = {
      data: {
        message: string;
      };
    };

    const { data }: HelloWordType = await this.httpService.http.get(
      this.secretService.url.HELLO_WORD_SERVICE,
      {
        timeout: 2000,
      },
    );

    this.loggerService.log(
      data.message,
      `${HealthService.name}/${this.getText.name}`,
    );

    return data.message;
  }
}
