import { OmitType } from "@nestjs/mapped-types"
import { Type } from "class-transformer"
import { IsIn, IsInt, IsISSN, IsNotEmpty, IsOptional, Length, Max, Min } from "class-validator"
import { title } from "process"


export class BookDto {
    @IsOptional()
    id: number

    @IsNotEmpty({message: 'name tidak boleh kosong'})
    @Length(5,20 ,{message: 'name minimal 5 dan maksimal 20'})
    name: string


    @IsNotEmpty({message: 'author tidak boleh kosong'})
    author:string
    
    @IsInt({message: 'Harus Beupa Angka'})
    @Min(2020, {message: 'Tahun harus dia antara 2020 - 2025'})
    @Max(2025, {message: 'Tahun harus dia antara 2020 - 2025'})
    year: number

    @IsNotEmpty({message: 'describe tidak boleh kosong'})
    @Length(10,100 ,{message: 'tidak boleh lebih dari 100 karakter'})
    describe: string
}

export class CreateBookDto extends OmitType(BookDto, ['id']){}
// omitType di gunkanakan untuk pengecualian (yg berada di dlm kurung siku merupakan pengecualian nya)

export class UpgreatBookDto extends BookDto{}
// sama persis (mengambil semua )

export class FindbookDto {
    @IsInt()
    @Type(() => Number)
    page:1

    @IsInt()
    @Type(() => Number)
    pageSize:3

    @IsOptional()
    @IsInt()
    limit:number

    @IsOptional()
    keyword:string

    @IsOptional()
    title: string

    @IsOptional()
    author: string

    @IsOptional()
    describe:string

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    from_year: number

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    to_year: number

   
}

[
    {
        title : "nestjs dev"
    },
    {
        author : "ihsan"
    },
    {
        describe : "buku yang bagus"
    }
]
