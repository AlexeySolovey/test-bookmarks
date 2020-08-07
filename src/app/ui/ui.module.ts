import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../material.module';
import { GridComponent } from './grid/grid.component';

const UiComponents = [CardComponent, GridComponent]

@NgModule({
  declarations: [UiComponents],
  exports: [UiComponents],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class UiModule { }
