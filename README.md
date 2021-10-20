# NestJs boilerplate API

verify [CONTRIBUTING](./CONTRIBUTING.md)

## Description

[nest](https://docs.nestjs.com/) framework documentaion.

[conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/) framework documentaion.

[commitizen](https://github.com/commitizen/cz-cli) framework documentaion.

## Requirements

- [docker]
- [docker-compose]
- [yarn]
- [NVM]
   * Node >=14 <=15

## Architecture

- `src/main.ts`: Application entry point.
- `src/modules/`: Application modules, may contain; services, controller, repositories and etc.
- `src/modules/common/`: Common modules that used for two or many modules.
- `src/modules/common/**/adpater.ts`: Used to communicated with controller and others modules. Controllers and Modules must communicated with abstraction, not implementation.
- `src/modules/global/`: Globals modules that is visibles for all modules.
- `src/modules/global/secrets`: Modules settings and environment variables.
- `src/utils/`: Utilities for the application that will not necessarily only be used within modules.
- `src/filters/`: Exception Filters are called after the route handler and after the interceptors. They are the last place to make changes before a response goes out.
- `src/interceptors/`: Application interceptors.
- `src/static/`: Application static files like JSON, CSV etc.
- `src/static/status.json`: Error message that will show to user accordind to status.
- `src/test/jest-init.ts`: Test startup settings like envs and mocks.

## prerequisites

1. create file
```bash
$ touch .env
```

2. add on file
```js
ENV=dev
PORT=3000
TZ ='America/Sao_Paulo'
HELLO_WORD_SERVICE='https://sandbox.api.service.nhs.uk/hello-world/hello/world'

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

* throw error

```js
import { ErrorRest } from 'utils/error';

throw new ErrorRest({
      error: 'Error message',
      status: HttpStatus.INTERNAL_SERVER_ERROR, //optional
    });

```


* logs

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


* envs

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

