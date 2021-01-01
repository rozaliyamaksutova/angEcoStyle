import { Injectable } from '@angular/core';

import {ProductService} from './product.service';
import { Product } from './product';
import { PRODUCTS } from './products-mockup';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basketProducts: number[] = [];

  constructor(
    private productService: ProductService,
  ) { }

  add(productId: number) {
    this.basketProducts.push(productId);
  }

  remove(productId: number) {
    const index = this.basketProducts.indexOf(productId);
    if (index > -1) {
      this.basketProducts.splice(index, 1);
    }
  }

  getIds() {
    return this.basketProducts;
  }

  getProducts() {
    return this.basketProducts.map(id => {
      let item;
      this.productService.getProduct(+id).subscribe(product => item = product);
      return item;
    });
  }

  clear() {
    this.basketProducts = [];
  }
}
