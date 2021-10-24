import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ICustomerRepository } from './adapter';
import { Customer } from './entity';

@Controller('/customer')
export class CustomerController {
  constructor(
    private readonly customerRepository: ICustomerRepository<Customer>,
  ) {}

  @Get()
  async getAll(): Promise<Customer[]> {
    return await this.customerRepository.getAll();
  }

  @Post()
  async save(@Body() model: Customer): Promise<Customer> {
    return await this.customerRepository.save(model);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() model: Customer,
  ): Promise<unknown> {
    return await this.customerRepository.update(id, model);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<unknown> {
    return await this.customerRepository.delete(id);
  }
}
