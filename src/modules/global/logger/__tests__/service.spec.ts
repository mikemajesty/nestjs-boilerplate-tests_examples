import { HttpStatus } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ErrorRest } from '../../../../utils/error';
import { ILoggerService } from '../adapter';
import { LoggerService } from '../service';

describe('LoggerService', () => {
  let loggerService: ILoggerService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: ILoggerService,
          useClass: LoggerService,
        },
      ],
    }).compile();

    loggerService = module.get(ILoggerService);
    loggerService.setContext('TestLog');
  });

  describe('error', () => {
    test('should error successfully', () => {
      const error = new ErrorRest({
        error: 'Error',
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      });

      loggerService.error(error);
    });

    test('should error successfully without context', () => {
      const error = new ErrorRest({
        error: 'Error',
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      });
      error.context = undefined;

      loggerService.error(error);
    });

    test('should error successfully without statusCode', () => {
      const error = new ErrorRest({ error: 'Error' });
      error.statusCode = undefined;
      error.code = 'TIMEOUT';
      loggerService.error(error);
    });
  });
});
