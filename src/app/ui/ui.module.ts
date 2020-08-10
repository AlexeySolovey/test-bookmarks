import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product/card-product.component';
import { MaterialModule } from '../material.module';
import { GridComponent } from './grid/grid.component';

const UiComponents = [CardProductComponent, GridComponent]

@NgModule({
  declarations: [UiComponents],
  exports: [UiComponents],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class UiModule { }
