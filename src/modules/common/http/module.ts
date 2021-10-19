import { Module } from '@nestjs/common';
import { HttpService } from './service';

@Module({
  providers: [HttpService],
})
export class HttpModule {}
