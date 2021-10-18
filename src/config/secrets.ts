export enum Variables {
  ENV = 'ENV',
  PORT = 'PORT',
  HELLO_WORD_URL = 'HELLO_WORD_URL',
}

export abstract class Secrets {
  getEnv(variable: Variables): string {
    return process.env[variable];
  }
}
