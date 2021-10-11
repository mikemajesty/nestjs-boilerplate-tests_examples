import { HttpException } from '@nestjs/common';

export class ErrorRest extends HttpException {
  context: string;
  uuid: string;
  statusCode: number;
  code?: string;
  config?: unknown;
  /**
   * @param status HTTP response status code. default is
   * @param error string describing the error condition.
   * @param context logger context
   */
  constructor(error: { error: string; context?: string; status?: number }) {
    super(error.error, error.status || 500);
    this.context = error.context;
    this.statusCode = super.getStatus();
  }
}
