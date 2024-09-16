import { OmitType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsOptional, Length } from "class-validator";

export class KantinDto {
    @IsOptional()
    id:number

    @IsNotEmpty()
    @Length(10,20)
    name:string;

    @IsOptional()
    @Length(10,20)
    pesanan:string;

    @IsOptional()
    @Length(10,20)
    kasir:string;

    @IsOptional()
    @Length(10,20)
    describe:string
}
 

export class CreateKantinDto extends OmitType(KantinDto, ['id']){}


