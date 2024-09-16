import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SiswaService } from './siswa.service';

@Controller('siswa')
export class SiswaController {
    constructor(private siswaService: SiswaService) {}

    @Get('detail/:id')
    async DetailbyId (@Param('id') id:number) {
        return this.siswaService.DetailSiswa(+id)
    }

    @Post('create')
    async simpanSuccess (@Body() payload:any) {
        return this.siswaService.simpanSuccess(payload)
    }

    @Put('update/:id')
    async update (@Param('id') id:number, @Body() payload:any) {
        return this.siswaService.update(+id, payload)
    }
}

