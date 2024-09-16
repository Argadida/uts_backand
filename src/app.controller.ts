import { Controller, Get,Post,Put,Delete,Patch } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // Get,Post,Put,Delete,Patch method yang di gunakan di backand

  @Post()
  // post method di gunakan untuk menyimpan data
  create(): string {
    return "ok"
  }

  @Post("test")
  create2(): string {
    return "ok TEST"
  }

  @Get()
  // untuk menampilkan data
  getHello(): string {
    return "Belajar Routing Nextjs"
  }


  @Get("list")
  getHello2(): string {
    return "Belajar Routing Nextjs 2"
  }

  @Put()
  update(): string {
    return "ini method update"
  }
}
