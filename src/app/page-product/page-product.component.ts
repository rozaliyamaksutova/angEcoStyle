import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-page-product',
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.scss']
})
export class PageProductComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private basketService: BasketService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this.basketCheck();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  addToBasket(id: number): void {
    this.basketService.add(id);
    this.basketCheck();
  }

  basketCheck(){
    const basketIds = this.basketService.getIds();
      if (basketIds.indexOf(this.product.id) > -1){
        this.product.basket = true;
      }else{
        this.product.basket = false;
      }
  }
}
