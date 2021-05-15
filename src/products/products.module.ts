import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './Entities/product.entity';
import { Shop } from './Entities/shop.entity';
import { Stock } from './Entities/stock.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { StockService } from './stock.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Stock])],
  controllers: [ProductsController],
  providers: [ProductsService, StockService]
})
export class ProductsModule {}
