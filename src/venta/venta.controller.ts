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
import { VentaService } from './venta.service';
import { CreateVentaDto } from './dto/venta.dto';

@Controller('Venta')
export class VentaController {
  constructor(private readonly ventaServiceRepo: VentaService) {}

  @Post()
  create(@Body() ventaDto: CreateVentaDto) {
    return this.ventaServiceRepo.create(ventaDto);
  }

  // Metodo para visualizar todos tus productos
  @Get()
  findAll() {
    return this.ventaServiceRepo.findAll();
  }

  //metodo para visualizar un producto en espesifico
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.ventaServiceRepo.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.ventaServiceRepo.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() UpdateVentaDTO: CreateVentaDto,
  ) {
    return this.ventaServiceRepo.update(id, UpdateVentaDTO);
  }
}
