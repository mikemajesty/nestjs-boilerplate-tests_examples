import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getText(): string {
    return 'nestjs-boilerplate-api UP!!!';
  }
}
