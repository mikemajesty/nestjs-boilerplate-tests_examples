import { HttpException } from '@nestjs/common';

export class ErrorRest extends HttpException {
  context: string;
  statusCode: number;
  /**
   * @param status HTTP response status code. default is
   * @param response string or object describing the error condition.
   * @param context logger context
   */
  constructor(error: {
    responde: string | Record<string, unknown>;
    context: string;
    status?: number;
  }) {
    super(error.responde, error.status);
    this.context = error.context;
    this.statusCode = super.getStatus() || 500;
  }
}
