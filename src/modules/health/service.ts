import { Injectable } from '@nestjs/common';
import { LoggerService } from '../common/logger/service';

@Injectable()
export class HealthService {
  constructor(private loggerService: LoggerService) {
    this.loggerService.setContext(HealthService.name);
  }

  private text = 'nestjs-boilerplate-api UP!!!';
  getText(): string {
    try {
      this.loggerService.log(this.text);
      return this.text;
    } catch (error) {
      this.loggerService.error(error);
      throw error;
    }
  }
}
