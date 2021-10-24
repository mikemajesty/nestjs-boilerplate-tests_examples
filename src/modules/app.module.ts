import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/module';
import { GlobalModule } from './global/global.module';
import { SecretsService } from './global/secrets/service';
import { HealthModule } from './health/module';
@Module({
  imports: [
    HealthModule,
    GlobalModule,
    CustomerModule,
    TypeOrmModule.forRootAsync({
      useFactory: async (secretsService = new SecretsService()) => ({
        type: secretsService.db.TYPE,
        host: secretsService.db.HOST,
        username: secretsService.db.USERNAME,
        password: secretsService.db.PASSWORD,
        database: secretsService.db.DATABASE,
        synchronize: secretsService.IS_NOT_PRODUCTION,
        dropSchema: secretsService.IS_NOT_PRODUCTION,
        entities: [__dirname + '../modules/**/entity{.ts,.js}'],
        autoLoadEntities: true,
        logging: true,
      }),
    }),
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
