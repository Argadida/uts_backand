import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { LatihanService } from './latihan.service';

@Controller('latihan')
export class LatihanController {
    constructor(
        private readonly latihanService: LatihanService

    ) {}

    @Get()
    findAll(@Query() query:any) {
        return this.latihanService.findAll(query)
    }









    // @Put('update/:id')
    // register(@Param('id') id: string, @Body() playload: any) {
    //     return {
    //         method: 'PUT',
    //         id_user: id,
    //         playload: playload
    //     }
    // }


    // @Get()
    // findAll(@Query() query:any) {
    //     return {
    //         method:'GET',
    //         query:query
    //     }
    // }

    @Get('detail/:id/:name')
    detail(@Param('id') id:string, @Param('name') name:string) {
        return this.latihanService.findDetail(id, name)
    }

    @Post('simpan')
    register (@Body () payload:any) {
        return this.latihanService.register(payload)

    }
}
