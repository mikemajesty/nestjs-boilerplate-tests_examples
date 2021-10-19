import { Injectable } from '@nestjs/common';
import { Settings } from '../../config/settings';
import { AxiosService } from '../../utils/axios';
import { LoggerService } from '../common/logger/service';

@Injectable()
export class HealthService extends AxiosService {
  constructor(
    private loggerService: LoggerService,
    private settings: Settings,
  ) {
    super();
  }

  async getText(): Promise<string> {
    const { data }: { data: { message: string } } = await this.axios.get(
      this.settings.HELLO_WORD_URL,
    );

    this.loggerService.log(
      data.message,
      `${HealthService.name}/${this.getText.name}`,
    );

    return data.message;
  }
}
