export enum Variables {
  ENV = 'ENV',
  PORT = 'PORT',
  HELLO_WORD = 'HELLO_WORD',
}

export abstract class Secrets {
  getEnv(variable: Variables): string {
    return process.env[variable];
  }
}
