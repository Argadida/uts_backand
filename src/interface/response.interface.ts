export interface ResponseSuccess {
    status: string,
    message: string,
    data?: any
}

export interface ResponsePagination extends ResponseSuccess {
    pagination : {
        total : number,
        page : number,
        pageSize : number,
    }
}

export interface ResponseSiswa {
    id?:number,
    status: string,
    message: string,
    data?: any
}
