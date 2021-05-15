import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'varchar', length: 100})
  name: string;

  @Column({type:'float'})
  price: number;

  @Column({type:'date'})
  expiry_date: string
}