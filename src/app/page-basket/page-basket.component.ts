import { Component, OnInit } from '@angular/core';
import {BasketService} from '../basket.service';

@Component({
  selector: 'app-page-basket',
  templateUrl: './page-basket.component.html',
  styleUrls: ['./page-basket.component.scss']
})
export class PageBasketComponent implements OnInit {

  basketItems = [];

  constructor(
    private basketService: BasketService,
  ) { }

  ngOnInit(): void {
    this.basketItems = this.basketService.getProducts();
  }

  removeItem(id: number){
    this.basketService.remove(id);
    this.basketItems = this.basketService.getProducts();
  }

  getTotal(){
    let total = 0;
    for (let i = 0; this.basketItems.length > i; i++){
      total += this.basketItems[i].price;
    }
    return total;
  }

  basketClear(){
    this.basketService.clear();
  }
}
