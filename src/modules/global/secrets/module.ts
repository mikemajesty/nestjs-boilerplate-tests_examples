import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SecretsService } from './service';
@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env' })],
  providers: [SecretsService, ConfigService],
})
export class SecretsModule {}
