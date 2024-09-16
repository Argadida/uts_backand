import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { KantinService } from './kantin.service';

@Controller('kantin')
export class KantinController {
    constructor (private kantinService: KantinService) {}

    @Get('list/:id')
    async findAllKantin(@Param('id') id:number) {
        return this.kantinService.FindAllKantin(+id)
    }

    @Post('create')
    async createKantin(@Body() payload: any) {
        return this.kantinService.CreateKantin(payload)
    }
}
