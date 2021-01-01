import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-block-basket',
  templateUrl: './block-basket.component.html',
  styleUrls: ['./block-basket.component.scss']
})
export class BlockBasketComponent implements OnInit {

  constructor(
    public basketService: BasketService
  ) { }

  ngOnInit(): void {}

}
