import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Computer } from './entities/computer.entitys';
import { CreateComputerDto } from './dto/computer.dto';

@Injectable()
export class ComputerService {
  constructor(
    @InjectRepository(Computer)
    private readonly computerRepository: Repository<Computer>,
  ) {}

  //metodo para crear un producto
  async create(computerDto: CreateComputerDto) {
    const product = this.computerRepository.create(computerDto);
    await this.computerRepository.save(product);
    return product;
  }
  // Metodo para visualizar todos tus productos
  findAll() {
    return this.computerRepository.find();
  }

  //metodo para visualizar un producto en espesifico
  findOne(id: string) {
    return this.computerRepository.findOneBy({ id });
  }

  //remover un producto
  async remove(id: string) {
    const computer = await this.findOne(id);
    await this.computerRepository.remove(computer);
    return 'Producto eliminado';
  }

  // actualizar producto
  async update(id: string, cambios: CreateComputerDto) {
    const findComputer = await this.findOne(id);
    const updatedComputer = await this.computerRepository.merge(
      findComputer,
      cambios,
    );
    return this.computerRepository.save(updatedComputer);
  }
}
