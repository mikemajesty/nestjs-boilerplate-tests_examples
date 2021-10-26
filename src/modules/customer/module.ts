import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DataBaseModule } from '../common/database/module';
import { ICustomerService } from './adapter';
import { CustomerController } from './controller';
import { Customer } from './entity';
import { CustomerService } from './service';

@Module({
  imports: [DataBaseModule, TypeOrmModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [
    {
      provide: ICustomerService,
      useClass: CustomerService,
    },
  ],
  exports: [ICustomerService],
})
export class CustomerModule {}
