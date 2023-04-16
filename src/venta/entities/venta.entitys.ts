import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Venta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  Nombre_cliente: string;

  @Column({ type: 'text' })
  Producto: string;

  @Column({ type: 'text', nullable: true })
  Marca?: string;

  @Column({ type: 'text', unique: true })
  Modelo: string;

  @Column({ type: 'text', nullable: true })
  Descripcion?: string;

  @Column({ type: 'numeric' })
  Unidades: number;

  @Column({ type: 'numeric' })
  Gran_Total: number;
}
