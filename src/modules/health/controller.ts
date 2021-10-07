import { Controller, Get } from '@nestjs/common';
import { HealthService } from './service';

@Controller()
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get('/health')
  getGealth(): string {
    return this.healthService.getText();
  }
}
