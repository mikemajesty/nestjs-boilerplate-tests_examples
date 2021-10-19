import { Controller, Get } from '@nestjs/common';
import { IHealthService } from './adapter';

@Controller()
export class HealthController {
  constructor(private readonly healthService: IHealthService) {}

  @Get('/health')
  getHealth(): Promise<string> {
    return this.healthService.getText();
  }
}
