import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  data = {name: 'Name', url: "https://material.angular.io/assets/img/examples/shiba2.jpg", group: "work" }
  products = [this.data, this.data];
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
