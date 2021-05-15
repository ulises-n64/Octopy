import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { parse } from 'node:path';
import { Repository } from 'typeorm';
import { Product } from './Entities/product.entity';
import { Stock } from './Entities/stock.entity';


@Injectable()
export class StockService {
    constructor(    @InjectRepository(Stock)
    private StockRepository: Repository<Stock>,
  ) {}

  async updateStock(id1, id2): Promise<any> {
    let newStock={
      "IdProduct":id1,
      "IdShop":id2
    }
    console.log(newStock);
      
     var aux = await this.StockRepository.create(newStock);
       await this.StockRepository.save(aux);
     
    }

}
