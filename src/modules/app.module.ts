import { Module } from '@nestjs/common';
import { GlobalModule } from './global/global.module';
import { HealthModule } from './health/module';

@Module({
  imports: [HealthModule, GlobalModule],
  providers: [],
})
export class AppModule {}
