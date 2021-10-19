import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as nock from 'nock';
import * as request from 'supertest';
import { AppModule } from '../../app.module';
import { SecretsService } from '../../global/secrets/service';

describe('HealthController (e2e)', () => {
  let app: INestApplication;
  let settings: SecretsService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    settings = new SecretsService();
    await app.init();
  });

  describe('/health (GET)', () => {
    const text = 'Hello Word!';
    it(`should return ${text}`, async () => {
      nock(settings.url.HELLO_WORD).get('/').reply(200, {
        message: text,
      });

      return request(app.getHttpServer()).get('/health').expect(text);
    });
  });
});
