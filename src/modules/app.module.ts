import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppExceptionFilter } from '../filters/http-exception.filter';
import { CommonModule } from './common/common.module';
import { HealthModule } from './health/module';

@Module({
  imports: [HealthModule, CommonModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AppExceptionFilter,
    },
  ],
})
export class AppModule {}
