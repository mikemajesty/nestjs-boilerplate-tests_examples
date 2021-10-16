import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import * as moment from 'moment';
import { LoggerService } from '../modules/common/logger/service';
import * as errorStatus from '../static/status.json';
import { ErrorRest } from '../utils/error';
@Catch()
export class AppExceptionFilter implements ExceptionFilter {
  catch(exception: ErrorRest, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    new LoggerService().error(exception);

    const code = [
      exception.code,
      status,
      HttpStatus.INTERNAL_SERVER_ERROR,
    ].find((c) => c);

    const error = {
      code,
      traceId: exception.uuid,
      message: errorStatus[code] || exception.message,
      timestamp: moment(new Date()).format('DD/MM/yyyy HH:mm:ss'),
      path: request.url,
    };

    response.status(status).json({ error });
  }
}
