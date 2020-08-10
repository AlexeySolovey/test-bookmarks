import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/main/interface/product';
import { Store } from '@ngrx/store';
import { State } from 'src/app/main/interface/store';
import { updateMarkAction } from 'src/app/store/product.action';

@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product: Product;
  
  constructor(private store: Store<State>) { }

  ngOnInit(): void {}

  updateMark(id: number, marked: boolean){
    this.store.dispatch(updateMarkAction({id, marked}));
  }

}
