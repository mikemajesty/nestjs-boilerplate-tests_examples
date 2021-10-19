import { Module } from '@nestjs/common';
import { HttpService } from './service';

@Module({
  providers: [HttpService],
  exports: [HttpService],
})
export class HttpModule {}
