import { Module } from '@nestjs/common';
import { KantinService } from './kantin.service';
import { KantinController } from './kantin.controller';
import { typeOrm } from 'src/config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kantin } from './kantin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kantin])],
  providers: [KantinService],
  controllers: [KantinController]
})
export class KantinModule {}
