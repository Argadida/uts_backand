import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kantin } from './kantin.entity';
import baseResponse from 'src/utils/response.utils';
import { ResponseSuccess } from 'src/interface';
import { CreateKantinDto } from './kantin.dto';

@Injectable()
export class KantinService extends baseResponse {

    constructor(
        @InjectRepository(Kantin) private readonly kantinRepository: Repository<Kantin>,
    ) {
        super();
    }

    async FindAllKantin (id:number): Promise<ResponseSuccess> {
        const save = await this.kantinRepository.find({
            where : {
                id : id
            }
        })

        return this._success('success')
    }

    async CreateKantin (payload:CreateKantinDto): Promise<ResponseSuccess> {
        const data = await this.kantinRepository.save(payload);
        
        return this._success('success')
    }
    
}
