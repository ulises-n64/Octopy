import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Shop')
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'varchar', length: 100})
  Name: string;

  @Column({type:'varchar', length:100})
  NameCity: string;

}