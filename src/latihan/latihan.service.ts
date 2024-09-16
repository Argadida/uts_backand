import { Injectable, Param } from '@nestjs/common';
import { METHODS } from 'http';

// tanda bahwa ia sebuah service ia menggunakan decorator injectable.
@Injectable()
export class LatihanService {
    findAll(query:any) {
        return {
            msg: 'siap latiha service',
            Param: query
        }
    }

    findDetail (id:string, name:string) {
        return {
            method: 'GET',
            id:id,
            name:name
        }
    }

    register (payload:any) {
        return {
            method: 'GET',
            payload: payload
        }
    }
}
