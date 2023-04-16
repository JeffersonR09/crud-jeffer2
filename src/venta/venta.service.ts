import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venta } from './entities/venta.entitys';
import { CreateVentaDto } from './dto/venta.dto';

@Injectable()
export class VentaService {
  constructor(
    @InjectRepository(Venta)
    private readonly ventaRepository: Repository<Venta>,
  ) {}

  //metodo para crear un producto
  async create(ventaDto: CreateVentaDto) {
    const venta = this.ventaRepository.create(ventaDto);
    await this.ventaRepository.save(venta);
    return venta;
  }
  // Metodo para visualizar todos tus productos
  findAll() {
    return this.ventaRepository.find();
  }

  //metodo para visualizar un producto en espesifico
  findOne(id: string) {
    return this.ventaRepository.findOneBy({ id });
  }

  //remover un producto
  async remove(id: string) {
    const venta = await this.findOne(id);
    await this.ventaRepository.remove(venta);
    return 'Dato eliminado';
  }

  // actualizar producto
  async update(id: string, cambios: CreateVentaDto) {
    const findventa = await this.findOne(id);
    const updatedventa = await this.ventaRepository.merge(findventa, cambios);
    return this.ventaRepository.save(updatedventa);
  }
}
