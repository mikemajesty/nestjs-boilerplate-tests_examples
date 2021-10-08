import { Injectable } from '@nestjs/common';
import { LoggerService } from '../shared/logger/logger.service';

@Injectable()
export class HealthService {
  constructor(private logger: LoggerService) {
    this.logger.setContext(HealthService.name);
  }

  private text = 'nestjs-boilerplate-api UP!!!';

  getText(): string {
    this.logger.log(this.text);
    return this.text;
  }
}
