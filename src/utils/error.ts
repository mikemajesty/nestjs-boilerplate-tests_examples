import { HttpException } from '@nestjs/common';

export class ErrorRest extends HttpException {
  context: string;
  uuid: string;
  statusCode: number;
  code?: string;
  config?: unknown;

  constructor(error: { error: string; status?: number }) {
    super(error.error, error.status || 500);
    this.statusCode = super.getStatus();
  }
}
