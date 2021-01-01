import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageIndexComponent} from './page-index/page-index.component';
import {PageAboutComponent} from './page-about/page-about.component';
import {PageProductsComponent} from './page-products/page-products.component';
import {PageContactsComponent} from './page-contacts/page-contacts.component';
import {PageBasketComponent} from './page-basket/page-basket.component';
import {PageProductComponent} from './page-product/page-product.component';
import {PageOrderendComponent} from './page-orderend/page-orderend.component';


const routes: Routes = [
  {path: '', component: PageIndexComponent},
  {path: 'about', component: PageAboutComponent},
  {path: 'products', component: PageProductsComponent},
  {path: 'contacts', component: PageContactsComponent},
  {path: 'basket', component: PageBasketComponent},
  {path: 'orderend', component: PageOrderendComponent},
  {path: 'products/:id', component: PageProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
