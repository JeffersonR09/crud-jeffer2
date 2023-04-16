import { IsString } from 'class-validator';
import { IsNotEmpty, IsNumber, IsOptional, MinLength } from 'class-validator';

export class CreateVentaDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(30)
  Nombre_cliente: string;

  @IsString()
  @IsNotEmpty()
  Producto: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  @IsOptional()
  Marca: string;

  @IsString()
  @IsNotEmpty()
  Modelo: string;

  @IsString()
  @MinLength(100)
  @IsOptional()
  Descripcion: string;

  @IsNumber()
  @IsNotEmpty()
  Unidades: number;

  @IsNumber()
  @IsNotEmpty()
  Gran_Total: number;
}
