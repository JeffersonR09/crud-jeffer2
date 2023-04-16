import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Computer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', unique: true })
  Marca: string;

  @Column({ type: 'text', unique: true })
  Modelo: string;

  @Column({ type: 'text', nullable: true })
  Descripcion?: string;

  @Column({ type: 'numeric' })
  Cantidad: number;

  @Column({ type: 'numeric' })
  Precio_unidad: number;

  @Column({ type: 'numeric' })
  Total: number;
}
