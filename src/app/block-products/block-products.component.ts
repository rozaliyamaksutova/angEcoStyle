import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';
import {BasketService} from '../basket.service';

@Component({
  selector: 'app-block-products',
  templateUrl: './block-products.component.html',
  styleUrls: ['./block-products.component.scss']
})
export class BlockProductsComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService,
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.basketCheck();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  addToBasket(id: number): void {
    this.basketService.add(id);
    this.basketCheck();
  }

  basketCheck(){
    const basketIds = this.basketService.getIds();
    for (let i = 0; this.products.length > i; i++){
      if (basketIds.indexOf(this.products[i].id) > -1){
        this.products[i].basket = true;
      }else{
        this.products[i].basket = false;
      }
    }
  }

}
