import { Module } from '@nestjs/common';
import { HttpModule } from '../common/http/module';
import { IHealthService } from './adapter';
import { HealthController } from './controller';
import { HealthService } from './service';

@Module({
  imports: [HttpModule],
  controllers: [HealthController],
  providers: [
    {
      provide: IHealthService,
      useClass: HealthService,
    },
  ],
})
export class HealthModule {}
