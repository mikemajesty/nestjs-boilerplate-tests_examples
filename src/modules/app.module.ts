import { Module } from '@nestjs/common';

import { DataBaseModule } from './common/database/module';
import { CustomerModule } from './customer/module';
import { GlobalModule } from './global/global.module';
import { HealthModule } from './health/module';
@Module({
  imports: [HealthModule, CustomerModule, GlobalModule, DataBaseModule],
  providers: [],
  exports: [],
})
export class AppModule {}
