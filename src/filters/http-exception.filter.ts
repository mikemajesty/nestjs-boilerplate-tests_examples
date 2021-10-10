import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { LoggerService } from '../modules/common/logger/service';
import * as errorStatus from '../static/status.json';
import { ErrorRest } from '../utils/error';

@Catch()
export class AppExceptionFilter implements ExceptionFilter {
  catch(exception: ErrorRest, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    exception.uuid = uuidv4();

    if (!exception?.context) {
      exception.context = AppExceptionFilter.name;
    }
    new LoggerService().error(exception);

    const code = exception.code || status || HttpStatus.INTERNAL_SERVER_ERROR;
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
