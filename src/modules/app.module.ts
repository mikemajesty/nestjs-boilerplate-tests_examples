import { Module } from '@nestjs/common';
import { HealthModule } from './health/module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [HealthModule, SharedModule],
})
export class AppModule {}
