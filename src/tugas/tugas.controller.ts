import { Body, Controller, Get, Param, Post,Delete } from '@nestjs/common';
import { TugasService } from './tugas.service';
import { filter } from 'rxjs';

@Controller('tugas')
export class TugasController {

    constructor(
        private readonly TugasService: TugasService
    ) {}

    @Get('list')
    soal1( @Body() filter:any) { 
        return this.TugasService.soal1(filter)
        
    }

    @Get(':id/detail')
    soal2(@Param('id') id:string) {
        return this.TugasService.soal2(id)
    }

    @Post ('simpan') 
    soal3(@Body() payload:any){
        return this.TugasService.soal3(payload)
    }

    @Delete (':id/delete')
    soal4(@Param ('id') id:string) {
        return this.TugasService.soal4(id)
    }
}
