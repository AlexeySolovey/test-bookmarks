import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import { NavigationComponent } from './main/navigation/navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { reducer } from './store/product.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({productsStore: reducer}),
    AppRoutingModule,
    ShopModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
