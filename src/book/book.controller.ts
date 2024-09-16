import { Body, Controller, Get, Post, Param, Put, Delete, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto, UpgreatBookDto } from './book.dto';
import { FindbookDto } from './book.dto';
import { query } from 'express';
import { Pagination } from 'src/utils/decorator/pagination.decorator';

@Controller('book')
export class BookController {
    constructor (private bookservice: BookService) {}

    @Get('list')
    async findAllBooks(@Pagination() query:FindbookDto) {
        console.log('query',query);
        
        return this.bookservice.findAllBooks(query);
    }


    @Post('create')
    async createBook (@Body() payload:UpgreatBookDto) {
        return this.bookservice.create(payload);
    }

    @Get('detail/:id')
    async detailBook (@Param('id') id:number){
        return this.bookservice.detail(+id);
    }

    @Put ('update/:id')
    async updateBook (@Param('id') id:number, @Body() payload:UpgreatBookDto) {
        return this.bookservice.update(+id, payload);
    }

    @Delete('delete/:id')
    async deleteBook (@Param('id') id:number) {
        return this.bookservice.delete(id);
    }

    @Delete('delete')  
    async deleteMulti(@Query('id') id:string) {
        const idArray = id.split(',');
        return this.bookservice.deleteMulti(idArray);
    }



}
