import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    UiModule
  ]
})
export class ShopModule { }
