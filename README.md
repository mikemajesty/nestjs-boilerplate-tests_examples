# NestJs boilerplate API

## Description

[Nest](https://docs.nestjs.com/) framework documentaion.

## Requirements

- [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
  - Node >=14 <=15

## Architecture

- `src/main.ts`: Application entry point.
- `src/config/`: Application setup for settings and environment variables.
- `src/modules/`: Application modules, may contain; services, controller, repositories and ect.

## Installation


### prerequisites

1 - create file
```
 touch develop.env
```

2 - add
```
ENV=dev
PORT=3000

```

```
bash $ yarn
```

```

## Running the app

```

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

The following is a list of all the people that have contributed to Legend of GitHub. Thanks for your contributions!

[<img alt="mikemajesty" src="https://avatars1.githubusercontent.com/u/11630212?s=460&v=4&s=117" width="117">](https://github.com/mikemajesty)
## License

It is available under the MIT license.
[License](https://opensource.org/licenses/mit-license.php)

