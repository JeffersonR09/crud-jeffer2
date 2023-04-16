import {
  Delete,
  Patch,
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ComputerService } from './computer.service';
import { CreateComputerDto } from './dto/computer.dto';

@Controller('Computer')
export class ComputerController {
  constructor(private readonly computerServiceRepo: ComputerService) {}

  @Post()
  create(@Body() computadoraDto: CreateComputerDto) {
    return this.computerServiceRepo.create(computadoraDto);
  }

  // Metodo para visualizar todos tus productos
  @Get()
  findAll() {
    return this.computerServiceRepo.findAll();
  }

  //metodo para visualizar un producto en espesifico
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.computerServiceRepo.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.computerServiceRepo.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() UpdateComputerDTO: CreateComputerDto,
  ) {
    return this.computerServiceRepo.update(id, UpdateComputerDTO);
  }
}
