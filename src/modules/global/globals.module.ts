import { Module } from '@nestjs/common';
import { LoggerModule } from './logger/module';

@Module({
  imports: [LoggerModule],
})
export class GlobalsModule {}
