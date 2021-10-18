import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as nock from 'nock';
import * as request from 'supertest';
import { Settings } from '../../../config/settings';
import { AppModule } from '../../app.module';
import { LoggerService } from '../../common/logger/service';
import { HealthService } from '../service';

describe('HealthController (e2e)', () => {
  let app: INestApplication;
  let settings: Settings;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [HealthService, LoggerService, Settings],
    }).compile();

    app = moduleFixture.createNestApplication();
    settings = new Settings();
    await app.init();
  });

  describe('/health (GET) ', () => {
    it('should return Hello Word!', async () => {
      nock(settings.HELLO_WORD_URL).get('/hello-world/hello/world').reply(200, {
        message: 'Hello Word!!',
      });

      return request(app.getHttpServer()).get('/health').expect('Hello Word!!');
    });
  });
});
