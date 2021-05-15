import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './Entities/product.entity';
import { Stock } from './Entities/stock.entity';


@Injectable()
export class ProductsService {
    constructor(    @InjectRepository(Product)
    private ProductsRepository: Repository<Product>,
  ) {}
  findAll(): Promise<Product[]> {
    return this.ProductsRepository.find();
  }

  findOne(id: string): Promise<Product> {
    return this.ProductsRepository.findOne(id);
  }

  async remove(id: string): Promise<any> {
    return await this.ProductsRepository.delete(id);
  }
  async create(body): Promise<any> {
    var aux = await this.ProductsRepository.create(body);
    return await this.ProductsRepository.save(aux);

  }
  async update(body, id): Promise<any> {
    return await this.ProductsRepository.update(id, body);
  }
  

}
