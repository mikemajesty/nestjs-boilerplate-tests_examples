import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';
import { ErrorRest } from '../../../utils/error';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends ConsoleLogger {
  error(error: ErrorRest): void {
    super.error({
      status: error.statusCode || error.code,
      traceId: error.uuid,
      ...{
        message: error.message,
        context: error?.context || this.context,
        stack: error.stack,
        request: error.config,
      },
    });
  }
}
