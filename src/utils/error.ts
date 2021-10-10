import { HttpException } from '@nestjs/common';

export class ErrorRest extends HttpException {
  context: string;
  code?: string;
  isAxiosError?: boolean;
  config?: unknown;
  uuid: string;
  statusCode: number;
  /**
   * @param status HTTP response status code. default is
   * @param response string or object describing the error condition.
   * @param context logger context
   */
  constructor(error: { response: string; context: string; status?: number }) {
    super(error.response, error.status || 500);
    this.context = error.context;
    this.statusCode = super.getStatus();
  }
}
