import { Module } from '@nestjs/common';
import { Settings } from '../../config/settings';
import { LoggerService } from '../common/logger/service';
import { HealthController } from './controller';
import { HealthService } from './service';

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [HealthService, LoggerService, Settings],
})
export class HealthModule {}
