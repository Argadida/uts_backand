import { OmitType } from "@nestjs/mapped-types";
import { IsInt, IsNotEmpty, IsOptional, Length } from "class-validator";
import { Type } from "class-transformer"

export class SiswaDto {
    @IsOptional()
    id:number

    @IsNotEmpty({message: 'nama tidak boleh kosong'})
    nama:string;

    @IsNotEmpty({message: 'tempat lahir tidak boleh kosong'})
    tempat_lahir:string;

    @IsNotEmpty({message: 'tanggal lahir tidak boleh kosong'})
    tanggal_lahir:string;

    @IsNotEmpty()
    nisn:string;

    @IsNotEmpty()
    nik:string;

    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    alamat:string;
}


export class SimpanSuccess extends SiswaDto{}

export class FindSiswaDto {
    @IsInt()
    @Type(() => Number)
    page:1

    @IsInt()
    @Type(() => Number)
    pageSize:3

    @IsOptional()
    nama:string;

    @IsNotEmpty({message: 'tempat lahir tidak boleh kosong'})
    tempat_lahir:string;

    @IsNotEmpty({message: 'tanggal lahir tidak boleh kosong'})
    tanggal_lahir:string;

    @IsNotEmpty()
    nisn:string;

    @IsNotEmpty()
    nik:string;

    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    alamat:string;

   
}