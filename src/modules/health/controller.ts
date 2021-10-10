import { Controller, Get, UseFilters } from '@nestjs/common';
import { AppExceptionFilter } from '../../filters/http-exception.filter';
import { HealthService } from './service';

@Controller()
@UseFilters(new AppExceptionFilter())
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get('/health')
  getGealth(): string {
    return this.healthService.getText();
  }
}
