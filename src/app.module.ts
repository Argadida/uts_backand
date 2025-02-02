import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LatihanModule } from './latihan/latihan.module';
import { TugasModule } from './tugas/tugas.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrm } from './config/typeorm.config';
import { BookModule } from './book/book.module';
import { KantinModule } from './kantin/kantin.module';
import { SiswaModule } from './siswa/siswa.module';

@Module({
  imports: [ConfigModule
    .forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: async() => {
        const{typeOrm} = await import('./config/typeorm.config');
        return typeOrm;
      },
    }),
    LatihanModule,
    TugasModule,
    BookModule,
    KantinModule,
    SiswaModule,],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
