import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, InitialProduct } from '../main/interface/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  productState: Observable<InitialProduct>;
  
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.productState = this.store.select('productsStore');
  }

}
