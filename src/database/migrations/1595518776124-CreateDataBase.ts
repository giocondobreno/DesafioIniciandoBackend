import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateDataBase1595518776124 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createDatabase('gostack_desafio06_tests', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase('gostack_desafio06_tests', true);
  }
}
