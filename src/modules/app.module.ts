import { Module } from '@nestjs/common';
import { GlobalsModule } from './global/globals.module';
import { HealthModule } from './health/module';

@Module({
  imports: [HealthModule, GlobalsModule],
  providers: [],
})
export class AppModule {}
