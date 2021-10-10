import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { HealthModule } from './health/module';

@Module({
  imports: [HealthModule, CommonModule],
  providers: [],
})
export class AppModule {}
