import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('kantin')
export class Kantin extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}