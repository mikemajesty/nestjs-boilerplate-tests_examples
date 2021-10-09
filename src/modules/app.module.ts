import { Module } from '@nestjs/common';
import { SharedModule } from './common/common.module';
import { HealthModule } from './health/module';

@Module({
  imports: [HealthModule, SharedModule],
})
export class AppModule {}
