import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProduct } from './Dto/product.dto';
import { Product } from './Entities/product.entity';
import { ProductsService } from './products.service';
import { StockService } from './stock.service';
@Controller('products')
export class ProductsController {
    constructor(private ProductsService: ProductsService
        , private StockService:StockService
        ) { }


   //el error esta aqui, No esta importando ProductsService correctamente
    @Get()
    async getUsers(): Promise<Product[]>{ 
        return await this.ProductsService.findAll();
    }
    @Get('/:Id')
    async getUser(@Param('Id') Id: string){
        return await this.ProductsService.findOne(Id);

    }
    @Post()
   async createUser(@Body() Product:CreateProduct): Promise<Product>{
       console.log(Product)

       let newProduct={
           name:Product.name,
           price:Product.price,
           expiry_date: Product.expiry_date

       }
        var aux =await this.ProductsService.create(newProduct);
        var l=Product.store_id.length;
         console.log(l)
        for(var i=0;i<=l; i++ ){
            var pri = await this.StockService.updateStock(aux.id, Product.store_id[1] )
            console.log(pri)
        }
        return aux;
        
    }
    @Delete('/:Id')
    async deleteUser(@Param('Id') Id:string):Promise<Product>{
        return await this.ProductsService.remove(Id);
    }
    @Put('/:Id')
    async insertConversation(@Param('Id') Id: string, @Body() body) {
        return await this.ProductsService.update(body, Id);
    }

}
