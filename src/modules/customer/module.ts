import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ICustomerRepository } from './adapter';
import { CustomerController } from './controller';
import { Customer } from './entity';
import { CustomerService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [
    {
      provide: ICustomerRepository,
      useClass: CustomerService,
    },
  ],
})
export class CustomerModule {}
