import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as nock from 'nock';
import * as request from 'supertest';
import { AppException } from '../../../utils/error';
import { HttpService } from '../../common/http/service';
import { LoggerService } from '../../global/logger/service';
import { ISecretsService } from '../../global/secrets/adapter';
import { SecretsService } from '../../global/secrets/service';
import { IHealthService } from '../adapter';
import { HealthController } from '../controller';
import { HealthService } from '../service';

describe('HealthController (e2e)', () => {
  let app: INestApplication;
  let secrets: ISecretsService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        {
          provide: ISecretsService,
          useClass: SecretsService,
        },
        {
          provide: IHealthService,
          useFactory: (
            secretService = new SecretsService(),
            loggerService = new LoggerService('test'),
            httpService = new HttpService(),
          ) => new HealthService(secretService, loggerService, httpService),
        },
      ],
      imports: [],
    }).compile();

    secrets = moduleFixture.get(ISecretsService);
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/health (GET)', () => {
    const text = 'Hello Word!';
    it(`should return ${text}`, async () => {
      nock(secrets.url.HELLO_WORD_SERVICE).get('/').reply(200, {
        message: text,
      });

      return request(app.getHttpServer()).get('/health').expect(text);
    });

    it(`should throw statusCode 500`, async () => {
      nock(secrets.url.HELLO_WORD_SERVICE)
        .get('/')
        .replyWithError(new AppException('ERROR', 500));

      return request(app.getHttpServer())
        .get('/health')
        .expect({ statusCode: 500 });
    });
  });
});
