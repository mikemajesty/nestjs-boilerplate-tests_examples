# NestJs boilerplate API

## Description

[nest](https://docs.nestjs.com/) framework documentaion.
[conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/) framework documentaion
[commitizen](https://github.com/commitizen/cz-cli) framework documentaion
[semantic-release](https://github.com/semantic-release/semantic-release) framework documentaion

## Requirements

- [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
  - Node >=14 <=15

## Architecture

- `src/main.ts`: Application entry point.
- `src/config/`: Application setup for settings and environment variables.
- `src/modules/`: Application modules, may contain; services, controller, repositories and etc.
- `src/modules/common/`: Utilities for the application that will necessarily be used only within the modules.
- `src/utils/`: Utilities for the application that will not necessarily only be used within modules.
- `src/filters/`: Exception Filters are called after the route handler and after the interceptors. They are the last place to make changes before a response goes out.
- `src/interceptors/`: Application interceptors.
- `src/static/`: Application static files like JSON, CSV etc.
- `src/static/status.json`: Error message that will show to user accordind to status.
- `src/test/jest-init.ts`: Test startup settings like envs and mocks.

## prerequisites

1 - create file
```bash
$ touch .env
```

2 - add on file
```bash
ENV=dev
PORT=3000
TZ ='America/Sao_Paulo' // your timezone

```

## Installation

```bash
# commitizen
$ npm install -g commitizen
# nest
$ npm i -g @nestjs/cli
```

```bash
$ yarn
```

## Running the app

```bash
# development
$ start:dev
```

```bash
# production
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

1. throw error

```bash
import { ErrorRest } from 'utils/error';

throw new ErrorRest({
      error: 'Error message',
      status: HttpStatus.INTERNAL_SERVER_ERROR, //optional
    });

```

1. logs

```bash
import { LoggerService } from 'shared/logger/service';

export class Example {
  constructor(private loggerService: LoggerService) {
  }

  example(): void {
    this.loggerService.log('your text');
  }
}

```

The following is a list of all the people that have contributed to Legend of GitHub. Thanks for your contributions!

[<img alt="mikemajesty" src="https://avatars1.githubusercontent.com/u/11630212?s=460&v=4&s=117" width="117">](https://github.com/mikemajesty)
## License

It is available under the MIT license.
[License](https://opensource.org/licenses/mit-license.php)

