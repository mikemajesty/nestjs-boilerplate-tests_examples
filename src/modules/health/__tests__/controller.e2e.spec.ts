import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as nock from 'nock';
import * as request from 'supertest';
import { Settings } from '../../../config/settings';
import { AppModule } from '../../app.module';

describe('HealthController (e2e)', () => {
  let app: INestApplication;
  let settings: Settings;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    settings = new Settings();
    await app.init();
  });

  describe('/health (GET)', () => {
    const text = 'Hello Word!';
    it(`should return ${text}`, async () => {
      nock(settings.HELLO_WORD_URL).get('/').reply(200, {
        message: text,
      });

      return request(app.getHttpServer()).get('/health').expect(text);
    });
  });
});
