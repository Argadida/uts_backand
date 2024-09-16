import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Like, Repository } from 'typeorm';
import { Siswa } from './siswa.entity';
import baseResponse from 'src/utils/response.utils';
import { ResponseSuccess } from 'src/interface';
import { SimpanSuccess } from './siswa.dto';

@Injectable()
export class SiswaService extends baseResponse {
    constructor(
        @InjectRepository (Siswa) private readonly siswaRepository: Repository<Siswa>
    ){
        super();
    }

    async findAllSiswa (query:any): Promise<ResponseSuccess> {
        const {page, pageSize, limit,nama,tempat_lahir,tanggal_lahir,nisn,nik,keyword} = query

        const filter : {[
            key: string]:any} = {}    


        const search : {
            [key: string]:any
        } [] = []

        if (keyword) {
            search.push(
            {
                nama : Like(`%${keyword}%`),
            },
            {
                tempat_lahir : Like(`%${keyword}%`),
            },
            {
                tanggal_lahir : Like(`%${keyword}%`),
            },
            {
                nisn : Like(`%${keyword}%`),
            },
            {
                nik: Like(`%${keyword}%`),
            }
            );


        }else{
            if(nama){
                filter.name = Like(`%${nama}%`)
            }
    
            if(tanggal_lahir){
                filter.tempat_lahir = Like(`%${tanggal_lahir}%`)
            }
    
            if(tempat_lahir){
                filter.tanggal_lahir = Like(`%${tempat_lahir}%`)
            }

            if(nisn){
                filter.nisn = Like(`%${nisn}%`)
            }

            if(nik){
                filter.nik = Like(`%${nik}%`)
            }

        }

        const result = await this.siswaRepository.find({
            where: keyword ? search : filter,
            skip:limit,
            take:Number(pageSize)
        });

        const total = await this.siswaRepository.count({
            where:keyword ? search : filter
        });

        return this._pagination('OK',result,total,page,pageSize)
    }

    async DetailSiswa (id:number): Promise<ResponseSuccess> {
        const detail = await this.siswaRepository.findOne({
            where : {
                id : id
            }
        });

        if (detail === null) {
            throw new NotFoundException('buku tidak ditemukan')
        }
        return this._success('OK')
    }

    async simpanSuccess (payload:any):Promise<ResponseSuccess> {
        const save = await this.siswaRepository.save(payload);
        if (save.affected === 0) {
            throw new HttpException('Email sudah digunakan', HttpStatus.UNPROCESSABLE_ENTITY)
        }
        return this._success('OK',save)
    }

    async update(id: number, payload: any): Promise<ResponseSuccess> {
        try {

            const result = this.siswaRepository.update(
                {
                    id: id
                },
                {
                    nama: payload.nama,
                    tempat_lahir: payload.tempat_lahir,
                    tanggal_lahir: payload.tanggal_lahir,
                    nisn: payload.nisn,
                    nik: payload.nik,
                },
            );


        return this._success('OK', result)
            
        } catch {
            throw new NotFoundException('siswa tidak ditemukan')
        }
    }

}
