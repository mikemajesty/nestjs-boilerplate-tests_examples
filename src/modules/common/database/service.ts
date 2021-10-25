import { Injectable, Scope } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { ISecretsService } from '../../global/secrets/adapter';

@Injectable({ scope: Scope.TRANSIENT })
export class DatabaseService {
  constructor(private secretService: ISecretsService) {}

  getConfig(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.secretService.db.HOST,
      username: this.secretService.db.USERNAME,
      password: this.secretService.db.PASSWORD,
      database: this.secretService.db.DATABASE,
      synchronize: this.secretService.ENV !== 'prd',
      entities: [__dirname + '../../../modules/**/*entity.ts}'],
      migrations: [__dirname + '../../../migration/*.migration.ts'],
      migrationsRun: true,
      autoLoadEntities: true,
      cli: {
        migrationsDir: __dirname + '../../../migration',
      },
    };
  }
}
