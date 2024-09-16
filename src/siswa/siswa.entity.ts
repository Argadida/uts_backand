import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, } from "typeorm";

@Entity()
export class Siswa extends BaseEntity {
    @PrimaryGeneratedColumn()

    id: number;

    @Column()
    nama: string;

    @Column({unique: true})
    email: string;

    @Column()
    tempat_lahir: string;

    @Column()
    tanggal_lahir: number;

    @Column()
    nisn:string;

    @Column()
    nik:string;

    @Column()
    alamat:string;

}
