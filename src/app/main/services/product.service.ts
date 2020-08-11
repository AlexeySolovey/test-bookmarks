import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../interface/store';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private store: Store<State>) { }

  updateBookMarks(){
    return this.store.select('productsStore');
  }
}
