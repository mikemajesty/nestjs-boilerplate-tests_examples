import { Module } from '@nestjs/common';
import { SecretsService } from './service';

@Module({
  providers: [SecretsService],
})
export class SecretsModule {}
