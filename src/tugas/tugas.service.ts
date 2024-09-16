import { Injectable } from '@nestjs/common';
import { METHODS } from 'http';

@Injectable()
export class TugasService {
    soal1(filter:any) {
        return {
            msg: 'success',
            filter: filter
        }
    }

    soal2 (id:string) {
        return {
            status: 'success',
            msg: `user dengan id ${id} berhasil di temukan`
        }
    }

    soal3 (payload:any) {
        return {
            status: 'success',
            msg: 'berhasil di simpan',
            payload: payload

        }
    }

    soal4 (id:string) {
        return {
            status: 'success',
            msg: `user dengan id ${id} berhasil di hapus`
        }
    }
}
