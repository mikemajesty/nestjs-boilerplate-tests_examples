import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppException } from '../../../utils/error';
import { ICustomerRepository } from '../adapter';
import { Customer } from '../entity';
import { CustomerService } from '../service';

describe('CustomerService', () => {
  let customerRepository: ICustomerRepository<Customer>;
  let repository: Repository<Customer>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(Customer),
          useValue: {},
        },
        {
          provide: ICustomerRepository,
          useClass: CustomerService,
        },
      ],
    }).compile();

    customerRepository = module.get(ICustomerRepository);
    repository = module.get(getRepositoryToken(Customer));
  });

  describe('getAll', () => {
    test('should getAll successfully', async () => {
      repository.find = jest.fn().mockResolvedValue(true);
      await expect(customerRepository.getAll()).resolves.toEqual(true);
    });

    test('should getAll with throw Error', async () => {
      repository.find = jest.fn().mockRejectedValue(new AppException('Error'));
      await expect(customerRepository.getAll()).rejects.toThrowError('Error');
    });
  });

  describe('delete', () => {
    test('should delete successfully', async () => {
      repository.delete = jest.fn().mockResolvedValue(true);
      const idDummy = 1;
      await expect(customerRepository.delete(idDummy)).resolves.toEqual(true);
    });

    test('should delete with throw Error', async () => {
      repository.delete = jest
        .fn()
        .mockRejectedValue(new AppException('Error'));
      const idDummy = 1;
      await expect(customerRepository.delete(idDummy)).rejects.toThrowError(
        'Error',
      );
    });
  });

  describe('save', () => {
    test('should save successfully', async () => {
      repository.save = jest.fn().mockResolvedValue(true);
      await expect(customerRepository.save(new Customer())).resolves.toEqual(
        true,
      );
    });

    test('should save with throw Error', async () => {
      repository.save = jest.fn().mockRejectedValue(new AppException('Error'));
      await expect(
        customerRepository.save(new Customer()),
      ).rejects.toThrowError('Error');
    });
  });

  describe('update', () => {
    test('should update successfully', async () => {
      repository.update = jest.fn().mockResolvedValue(true);
      const idDummy = 1;
      await expect(
        customerRepository.update(idDummy, new Customer()),
      ).resolves.toEqual(true);
    });

    test('should update with throw Error', async () => {
      repository.update = jest
        .fn()
        .mockRejectedValue(new AppException('Error'));
      const idDummy = 1;
      await expect(
        customerRepository.update(idDummy, new Customer()),
      ).rejects.toThrowError('Error');
    });
  });
});
