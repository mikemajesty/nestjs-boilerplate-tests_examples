import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalModule } from './global/global.module';
import { SecretsService } from './global/secrets/service';
import { HealthModule } from './health/module';
@Module({
  imports: [
    HealthModule,
    GlobalModule,
    TypeOrmModule.forRootAsync({
      useFactory: async (secretsService = new SecretsService()) => ({
        type: secretsService.db.TYPE,
        host: secretsService.db.HOST,
        username: secretsService.db.USERNAME,
        password: secretsService.db.PASSWORD,
        database: secretsService.db.DATABASE,
        logging: true,
        entities: [],
      }),
    }),
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
