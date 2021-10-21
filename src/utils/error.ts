import { HttpException } from '@nestjs/common';

export class AppException extends HttpException {
  context: string;
  uuid: string;
  statusCode: number;
  code?: string;
  config?: unknown;

  constructor(error: string, status?: number) {
    super(error, status || 500);
    this.statusCode = super.getStatus();
  }
}
