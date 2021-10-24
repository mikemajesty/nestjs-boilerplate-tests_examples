import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICustomerRepository } from './adapter';
import { Customer } from './entity';

@Injectable()
export class CustomerService implements ICustomerRepository<Customer> {
  constructor(
    @InjectRepository(Customer)
    private readonly repository: Repository<Customer>,
  ) {}

  async delete(id: number): Promise<unknown> {
    return this.repository.delete(id);
  }

  async update(id: number, customer: Customer): Promise<unknown> {
    return this.repository.update(id, customer);
  }

  async getAll(): Promise<Customer[]> {
    return this.repository.find({
      order: {
        name: 'ASC',
      },
    });
  }

  async save(customer: Customer): Promise<Customer> {
    return this.repository.save(customer);
  }
}
