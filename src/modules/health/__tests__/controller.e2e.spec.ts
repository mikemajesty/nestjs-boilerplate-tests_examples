import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../app.module';

describe('HealthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/health (GET) ', () => {
    it('should return "nestjs-boilerplate-api UP!!!"', () => {
      return request(app.getHttpServer())
        .get('/health')
        .expect('nestjs-boilerplate-api UP!!!');
    });
  });
});
