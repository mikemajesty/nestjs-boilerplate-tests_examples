import { Module } from '@nestjs/common';
import { LoggerService } from '../shared/logger/logger.service';
import { HealthController } from './controller';
import { HealthService } from './service';

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [HealthService, LoggerService],
})
export class HealthModule {}
