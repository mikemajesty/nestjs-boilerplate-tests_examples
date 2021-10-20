import { Module } from '@nestjs/common';
import { LoggerModule } from './logger/module';
import { SecretsModule } from './secrets/module';

@Module({
  imports: [LoggerModule, SecretsModule],
})
export class GlobalModule {}
