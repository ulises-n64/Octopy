import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Stock')
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'int'})
  IdProduct: number;

  @Column({type:'int'})
  IdShop: number;
}