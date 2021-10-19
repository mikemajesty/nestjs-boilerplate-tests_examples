import { Module } from '@nestjs/common';
import { HttpModule } from './http/module';
import { LoggerModule } from './logger/module';

@Module({
  imports: [LoggerModule, HttpModule],
})
export class CommonModule {}
