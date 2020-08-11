import { Component, OnInit } from '@angular/core';
import { ProductTypes } from '../main/interface/product';
import { ProductService } from '../main/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  productTypes: ProductTypes = {
    work: [],
    leisure: [],
    personal: []
  }
  products$: Subscription = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.updateBookMarks().subscribe(({ products }) => {
      this.productTypes.work = products.filter((item) => item.group === 'work' && item.mark);
      this.productTypes.leisure = products.filter((item) => item.group === 'leisure' && item.mark);
      this.productTypes.personal = products.filter((item) => item.group === 'personal' && item.mark);
    });
  }
  ngOnDestroy() {
    if (this.products$) {
      this.products$.unsubscribe();
      this.products$ = null;
    }
  }
}
