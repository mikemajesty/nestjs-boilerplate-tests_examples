import { ConsoleLogger, Injectable } from '@nestjs/common';
import { AppException } from '../../../utils/error';
import { SecretsService } from '../secrets/service';
import { ILoggerService } from './adapter';

@Injectable()
export class LoggerService extends ConsoleLogger implements ILoggerService {
  constructor(private readonly secrets: SecretsService) {
    super();
  }
  error(error: AppException): void {
    const context = error.context || this.context;
    super.context = context;

    if (this.secrets?.ENV !== 'test') {
      super.error({
        status: error.statusCode || error.code,
        traceId: error.uuid,
        ...{
          message: error.message,
          context,
          stack: error.stack,
          request: error.config,
        },
      });
    }
  }
}
