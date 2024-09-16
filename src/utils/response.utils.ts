import { ResponsePagination, ResponseSiswa, ResponseSuccess } from "src/interface";

export class baseResponse {

    _success(message: string, data?: any,): ResponseSuccess {
        return {
            status: 'Success',
            message: message,
            data: data || {},
        }
    };

    _successSiswa(message: string, data?: any, id?:number): ResponseSiswa {
        return {
            id:id,
            status: 'Success',
            message: message,
            data: data || {},
        }
    };

    _kantinSuccess(message: string, data: any): ResponseSuccess {
        return {
            status: 'success',
            message:message,
            data: data || {},
        }
    }

    _pagination(message: string, data: any,
        total: number,
        page: number,
        pageSize: number,
        status?: string
    ): ResponsePagination {
        return {
            status: status || 'success',
            message: message,
            data: data || {},
            pagination:{
            total: total,
                page: page,
                    pageSize: pageSize
        }
    }
}

    
}

export default baseResponse