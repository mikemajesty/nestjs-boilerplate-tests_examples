import { Module } from '@nestjs/common';
import { Settings } from '../../config/settings';
import { HttpService } from '../common/http/service';
import { LoggerService } from '../common/logger/service';
import { HealthController } from './controller';
import { HealthService } from './service';

@Module({
  controllers: [HealthController],
  providers: [HealthService, LoggerService, Settings, HttpService],
})
export class HealthModule {}
