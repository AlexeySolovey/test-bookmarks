import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/main/interface/store';
import { Product } from 'src/app/main/interface/product';
import { updateMarkAction } from 'src/app/store/product.action';
import { ProductService } from 'src/app/main/services/product.service';

@Component({
  selector: 'ui-form-bookmarks',
  templateUrl: './form-bookmarks.component.html',
  styleUrls: ['./form-bookmarks.component.css']
})
export class FormBookmarksComponent{

  productType: string = null;
  productID: number = null;
  productsArray: Product[] = [];
  constructor(private store: Store<State>, private productService: ProductService) { }

  push(): void{
    this.store.dispatch(updateMarkAction({id: this.productID, marked: true}));
    this.productService.updateBookMarks();
  }

  checkAvailableProduct(): void {
    this.productID = null;
    this.productsArray = [];
    let select$ = this.store.select('productsStore').subscribe(({products})=>{
      this.productsArray = products.filter((item)=>item.group === this.productType && !item.mark);
    });
    select$.unsubscribe;
    select$ = null;
  }

}
