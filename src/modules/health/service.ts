import { Injectable } from '@nestjs/common';
import { Settings } from '../../config/settings';
import { HttpService } from '../common/http/service';
import { LoggerService } from '../common/logger/service';

@Injectable()
export class HealthService {
  constructor(
    private loggerService: LoggerService,
    private settings: Settings,
    private httpService: HttpService,
  ) {}

  async getText(): Promise<string> {
    const { data }: { data: { message: string } } =
      await this.httpService.http.get(this.settings.HELLO_WORD_URL, {
        timeout: 2000,
      });

    this.loggerService.log(
      data.message,
      `${HealthService.name}/${this.getText.name}`,
    );

    return data.message;
  }
}
