import { Module } from '@nestjs/common';

import { CustomerModule } from './customer/module';
import { GlobalModule } from './global/global.module';
import { HealthModule } from './health/module';
@Module({
  imports: [HealthModule, GlobalModule, CustomerModule],
  providers: [],
  exports: [],
})
export class AppModule {}
