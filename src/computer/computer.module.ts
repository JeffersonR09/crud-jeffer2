import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComputerController } from './computer.controller';
import { ComputerService } from './computer.service';
import { Computer } from './entities/computer.entitys';

@Module({
  imports: [TypeOrmModule.forFeature([Computer])],
  controllers: [ComputerController],
  providers: [ComputerService],
})
export class ComputerModule {}
