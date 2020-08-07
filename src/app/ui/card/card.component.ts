import { Component, OnInit, Input } from '@angular/core';
import { ProductInterface } from 'src/app/main/productInterface';

@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product: ProductInterface;
  constructor() { }

  ngOnInit(): void {}

}
