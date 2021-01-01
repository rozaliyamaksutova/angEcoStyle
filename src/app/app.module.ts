import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageProductsComponent } from './page-products/page-products.component';
import { PageContactsComponent } from './page-contacts/page-contacts.component';
import { PageBasketComponent } from './page-basket/page-basket.component';
import { BlockHeaderComponent } from './block-header/block-header.component';
import { BlockFooterComponent } from './block-footer/block-footer.component';
import { FormAuthComponent } from './form-auth/form-auth.component';
import { BlockMenuComponent } from './block-menu/block-menu.component';
import { BlockProductsComponent } from './block-products/block-products.component';
import { PageProductComponent } from './page-product/page-product.component';
import { BlockBasketComponent } from './block-basket/block-basket.component';
import { PageOrderendComponent } from './page-orderend/page-orderend.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageIndexComponent,
    PageAboutComponent,
    PageProductsComponent,
    PageContactsComponent,
    PageBasketComponent,
    BlockHeaderComponent,
    BlockFooterComponent,
    FormAuthComponent,
    BlockMenuComponent,
    BlockProductsComponent,
    PageProductComponent,
    BlockBasketComponent,
    PageOrderendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
