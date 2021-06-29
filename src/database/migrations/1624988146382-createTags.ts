import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTags1624988146382 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"Tags",
                columns:[{
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name:"name",
                    type:"varchar"
                },
                {
                    name:"created_at",
                    type: "timestamp",
                    default: "now()"
                } ,
                {
                    name:"updated_at",
                    type:"timestamp",
                    default:"now()"
                }  
            ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tags");
    }

}
