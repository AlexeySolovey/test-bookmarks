import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product/card-product.component';
import { MaterialModule } from '../material.module';
import { GridComponent } from './grid/grid.component';
import { TableProductComponent } from './table-product/table-product.component';
import { FormBookmarksComponent } from './form-bookmarks/form-bookmarks.component';
import { FormsModule } from '@angular/forms';

const UiComponents = [CardProductComponent, GridComponent, TableProductComponent, FormBookmarksComponent]

@NgModule({
  declarations: [UiComponents],
  exports: [UiComponents],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class UiModule { }
