import { HttpException } from '@nestjs/common';

export class ErrorRest extends HttpException {
  context: string;
  code?: string;
  config?: unknown;
  uuid: string;
  statusCode: number;
  /**
   * @param status HTTP response status code. default is
   * @param message string or object describing the error condition.
   * @param context logger context
   */
  constructor(error: { message: string; context: string; status?: number }) {
    super(error.message, error.status || 500);
    this.context = error.context;
    this.statusCode = super.getStatus();
  }
}
