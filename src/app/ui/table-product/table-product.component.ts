import { Component, ViewChild, Input, OnChanges } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/main/interface/product';
import { State } from 'src/app/main/interface/store';
import { updateMarkAction } from 'src/app/store/product.action';

@Component({
  selector: 'ui-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})
export class TableProductComponent implements OnChanges {
  @Input() products: Product[];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  displayedColumns: string[] = ['id', 'name', 'url', 'group'];
  dataSource;

  constructor(private store: Store<State>) { }

  ngOnChanges(){
    this.dataSource = new MatTableDataSource(this.products);
    this.dataSource.sort = this.sort;
  }

  deleteFromBookMark(product: Product): void{
    const isRemove = confirm(`Do you whant remove ${product.name}`);
    if(isRemove) {
      let {id} = product;
      this.store.dispatch(updateMarkAction({id, marked: false}));
      this.dataSource = new MatTableDataSource(this.products);
    }
  }
}
