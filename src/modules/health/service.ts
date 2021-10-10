import { Injectable } from '@nestjs/common';
import { AxiosService } from '../../utils/axios';
import { LoggerService } from '../common/logger/service';

@Injectable()
export class HealthService extends AxiosService {
  constructor(private loggerService: LoggerService) {
    super();
    this.loggerService.setContext(HealthService.name);
  }

  private text = 'nestjs-boilerplate-api UP!!!';

  getText(): string {
    this.loggerService.log(this.text);
    return this.text;
  }
}
