import { IsString } from 'class-validator';
import { IsNotEmpty, IsNumber, IsOptional, MinLength } from 'class-validator';

export class CreateComputerDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  Marca: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  Modelo: string;

  @IsString()
  @MinLength(100)
  @IsOptional()
  Descripcion: string;

  @IsNumber()
  @IsNotEmpty()
  Cantidad: number;

  @IsNumber()
  @IsNotEmpty()
  Precio_unidad: number;

  @IsNumber()
  @IsNotEmpty()
  Total: number;
}
