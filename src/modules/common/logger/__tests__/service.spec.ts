import { HttpStatus } from '@nestjs/common';
import { Settings } from '../../../../config/settings';
import { ErrorRest } from '../../../../utils/error';
import { LoggerService } from '../service';
describe('LoggerService', () => {
  let loggerService: LoggerService;

  beforeEach(async () => {
    const settings = new Settings();
    settings.ENV = 'dev';
    loggerService = new LoggerService(settings);
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
