import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';
import { ErrorRest } from '../../../utils/error';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends ConsoleLogger {
  error({ message, context, stack, statusCode }: ErrorRest): void {
    super.error({
      status: statusCode,
      ...{ message, context, stack },
    });
  }
}
