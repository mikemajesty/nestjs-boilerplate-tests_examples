# NestJs boilerplate API

Check the [contributing manual](./CONTRIBUTING.md)

## Description

###### The best nestjs boilerplate using Anti-corruption Layer pattern secrets, logger, Mysql, Docker and unit tests

[nest](https://docs.nestjs.com/) framework documentaion.

[conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/) framework documentaion.

[commitizen](https://github.com/commitizen/cz-cli) framework documentaion.

## Requirements

- [docker]
- [docker-compose]
- [yarn]
- [NVM]
  - Node >=14 <=15

## Architecture

- `/jest/init.ts`: Test startup settings like envs and mocks.
- `src/main.ts`: Application entry point.
- `src/modules/`: Application modules, may contain; services, controller, repositories and etc.
- `src/modules/common/`: Common modules that used for two or many modules.
- `src/modules/common/**/adpater.ts`: Used to communicated with controller and others modules. Controllers and Modules must communicated with abstraction, not implementation.
- `src/modules/global/`: Globals modules that is visibles for all modules.
- `src/modules/global/secrets`: Modules settings and environment variables.
- `src/utils/`: Utilities for the application that will not necessarily only be used within modules.
- `src/static/`: Application static files like JSON, CSV etc.
- `src/static/status.json`: Error message that will show to user accordind to status.

## prerequisites

1. create file

```bash
$ touch .env
```

2. add on file

```bash
ENV=dev
PORT=3000
TZ='America/Sao_Paulo'

# url
HELLO_WORD_SERVICE='https://sandbox.api.service.nhs.uk/hello-world/hello/world'

# database
DB_TYPE='mysql'
DB_HOST='db'
DB_USERNAME='root'
DB_PASSWORD='admin'
DB_DATABASE='customer'
```

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start:dev
```

```bash
# dev/hml/prd environment
$ docker-compose up --build
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn  test:e2e

# test coverage
$ yarn  test:coverage
```

## Usage

- throw error

```js
import { AppException } from 'utils/error';

throw new AppException({
  error: 'Error message',
  status: HttpStatus.INTERNAL_SERVER_ERROR, //optional
});
```

- logs

```js
import { ILoggerService } from '../global/logger/adapter';

export class Example {
  constructor(
    private readonly loggerService: ILoggerService,
  ) {}

  async example(): void {
    this.loggerService.log(
      data.message,
      `${Example.name}/${this.example.name}`,// log context
    );

    this.loggerService.error(new ErrorRest({
      error: 'Error message',
      status: HttpStatus.INTERNAL_SERVER_ERROR, //optional
    }));

  }
}

```

- envs

```js
import { ISecretsService } from '../global/secrets/adapter';

@Injectable()
export class Example {
  constructor(
    private readonly secretService: ISecretsService,
  ) {}

  async example(): void {
    this.secretService.url.HELLO_WORD;
  }
}


```

The following is a list of all the people that have contributed to nest-boilerplate. Thanks for your contributions!

[<img alt="mikemajesty" src="https://avatars1.githubusercontent.com/u/11630212?s=460&v=4&s=117" width="117">](https://github.com/mikemajesty)

## License

It is available under the MIT license.
[License](https://opensource.org/licenses/mit-license.php)
