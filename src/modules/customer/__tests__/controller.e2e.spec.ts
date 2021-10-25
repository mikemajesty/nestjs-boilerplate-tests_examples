import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AppException } from '../../../utils/error';
import { ICustomerService } from '../adapter';
import { CustomerController } from '../controller';
import { Customer } from '../entity';
import { CustomerService } from '../service';

describe('CustomerController (e2e)', () => {
  let app: INestApplication;
  let service: ICustomerService<Customer>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [
        {
          provide: ICustomerService,
          useFactory: (
            repository = {
              find: () => true,
              save: () => true,
              update: () => true,
              delete: () => true,
            },
          ) => new CustomerService(repository),
        },
      ],
    }).compile();

    app = module.createNestApplication();
    service = app.get(ICustomerService);
    await app.init();
  });
  describe('/customer (GET)', () => {
    it('should getAll successfully', async () => {
      return request(app.getHttpServer())
        .get('/customer')
        .expect(200)
        .expect('true');
    });

    it('should getAll with throw error 400', async () => {
      service.getAll = jest
        .fn()
        .mockRejectedValue(new AppException('Error', HttpStatus.BAD_REQUEST));

      return request(app.getHttpServer())
        .get('/customer')
        .expect({ statusCode: 400, message: 'Error' });
    });
  });

  describe('/customer (POST)', () => {
    it('should save successfully', async () => {
      return request(app.getHttpServer())
        .post('/customer')
        .expect(201)
        .expect('true');
    });

    it('should save with throw error 412', async () => {
      service.save = jest
        .fn()
        .mockRejectedValue(
          new AppException('Error', HttpStatus.PRECONDITION_FAILED),
        );

      return request(app.getHttpServer())
        .post('/customer')
        .expect({ statusCode: 412, message: 'Error' });
    });
  });

  describe('/customer (PUT)', () => {
    it('should update successfully', async () => {
      return request(app.getHttpServer())
        .put('/customer/1')
        .expect(200)
        .expect('true');
    });

    it('should update with throw error 500', async () => {
      service.update = jest
        .fn()
        .mockRejectedValue(
          new AppException('Error', HttpStatus.INTERNAL_SERVER_ERROR),
        );

      return request(app.getHttpServer())
        .put('/customer/1')
        .expect({ statusCode: 500, message: 'Error' });
    });
  });

  describe('/customer (Delete)', () => {
    it('should delete successfully', async () => {
      return request(app.getHttpServer())
        .delete('/customer/1')
        .expect(200)
        .expect('true');
    });

    it('should delete with throw error 418', async () => {
      service.delete = jest
        .fn()
        .mockRejectedValue(new AppException('Error', HttpStatus.I_AM_A_TEAPOT));

      return request(app.getHttpServer())
        .delete('/customer/1')
        .expect({ statusCode: 418, message: 'Error' });
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
