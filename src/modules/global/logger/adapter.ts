import { ErrorRest } from 'utils/error';

export abstract class ILoggerService {
  abstract setContext(context: string): void;
  abstract error(errorRest: ErrorRest): void;
  abstract log(message: string, context?: string): void;
}
