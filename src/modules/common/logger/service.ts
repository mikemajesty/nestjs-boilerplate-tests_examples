import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';
import { Settings } from '../../../config/settings';
import { ErrorRest } from '../../../utils/error';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends ConsoleLogger {
  constructor(private settings: Settings) {
    super();
  }
  error(error: ErrorRest): void {
    const context = error.context || this.context;
    super.context = context;

    if (this.settings.ENV !== 'test') {
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
