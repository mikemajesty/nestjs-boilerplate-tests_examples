import { Injectable } from '@nestjs/common';
import { AppLogger } from '../shared/logger/logger.service';

@Injectable()
export class HealthService {
  private readonly logger = new AppLogger(HealthService.name);

  private text = 'nestjs-boilerplate-api UP!!!';

  getText(): string {
    this.logger.log(this.text);
    return this.text;
  }
}
