import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
// import { ResponseSuccess } from 'src/interface/response';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Like, Repository } from 'typeorm';
import { Book } from './book.entity';
import { ResponseSuccess } from 'src/interface/response.interface';
import { ResponsePagination } from 'src/interface/response.interface';
import baseResponse from 'src/utils/response.utils';
import { CreateBookDto, FindbookDto, UpgreatBookDto } from './book.dto';
import { skip } from 'node:test';
import { take } from 'rxjs';
import { log } from 'console';
// import { promises } from 'fs';
// import { create } from 'domain';
// import { Http2ServerRequest } from 'http2';
// import { notStrictEqual } from 'assert';

@Injectable()
export class BookService extends baseResponse {
    constructor(
        // membuat API untuk mengakses semua data di tabel book
        @InjectRepository(Book) private readonly bookRepository: Repository<Book>
        
    ) {
        super();
    }

    async findAllBooks(query:FindbookDto): Promise<ResponsePagination> {
        // return 'ok ini service'
        const {page, pageSize, limit,title,author,describe,from_year,to_year,keyword} = query

        console.log('keyword',keyword);
        

        const filter : {[
            key: string]:any} = {}    


        const search : {
            [key: string]:any
        } [] = []

        if (keyword) {
            search.push(
            {
                title : Like(`%${keyword}%`),
            },
            {
                author : Like(`%${keyword}%`),
            },
            {
                describe : Like(`%${keyword}%`),
            }
            );


        }else{
            if(title){
                filter.title = Like(`%${title}%`)
            }
    
            if(author){
                filter.author = Like(`%${author}%`)
            }
    
            if(describe){
                filter.describe = Like(`%${describe}%`)
            }
    
            if(from_year && to_year){
                filter.year = Between(from_year,to_year)
            }
    
            if(from_year && to_year){
                filter.year = Between(from_year,from_year)
            }
        }

        const result = await this.bookRepository.find({
            where: keyword ? search : filter,
            skip:limit,
            take:Number(pageSize)
        });

        const total = await this.bookRepository.count({
            where:keyword ? search : filter
        });


       

        console.log('FILTER',filter);
        console.log('serch',search);
        

        return this._pagination('OK', result, total, page, pageSize)


    }
    // menambah buku
    async create(payload: UpgreatBookDto): Promise<ResponseSuccess> {

        try {
            const save = await this.bookRepository.save(payload);

        return this._success('OK')
        } catch (error) {

        }


    }

    async detail(id: number): Promise<ResponseSuccess> {

        const result = await this.bookRepository.findOne({
            where: { id }
        });

        if (result === null) {
            throw new NotFoundException('buku tidak ditemukan')
        }

        return this._success('OK', result)
    }

    async update(id: number, payload: UpgreatBookDto): Promise<ResponseSuccess> {
        try {
            // const result = this.bookRepository.save({
            //     name: payload.name,
            //     year: payload.year,
            //     describe: payload.describe,
            //     author: payload.author,
            //     id: id
            // });

            const result = this.bookRepository.update(
                {
                    id: id
                },
                {
                    title: payload.name,
                    year: payload.year,
                    describe: payload.describe,
                    author: payload.author,
                },
            );


        return this._success('OK', result)
            
        } catch {
            throw new NotFoundException('buku tidak ditemukan')
        }
    }

    async delete(id: number): Promise<ResponseSuccess> {
        const result = await this.bookRepository.delete(id);
        if (result.affected === 0) {
            throw new HttpException('buku sudah di hapus', HttpStatus.UNPROCESSABLE_ENTITY)
        }

        return this._success('OK', result)
        
    }

    async deleteMulti(array: string[]): Promise<ResponseSuccess> {
        const deleted = await this.bookRepository.delete(array);
        if (deleted.affected === 0) {
            throw new HttpException('buku sudah di hapus', HttpStatus.NOT_FOUND)
        }   

        return this._success('OK')
        
    }


}
