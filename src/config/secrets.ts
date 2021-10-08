export enum Variables {
  ENV = 'ENV',
  PORT = 'PORT',
}

export abstract class Secrets {
  getEnv(variable: Variables): string {
    return process.env[variable];
  }
}
