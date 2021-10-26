import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCustomerTable implements MigrationInterface {
  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF EXISTS `customer`.`customer`');
  }
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE IF NOT EXISTS `customer`.`customer`');
  }
}
