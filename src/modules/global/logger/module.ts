import { Module } from '@nestjs/common';
import { LoggerService } from './service';

@Module({
  providers: [LoggerService],
})
export class LoggerModule {}
