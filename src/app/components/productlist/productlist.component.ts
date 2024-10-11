import { Component } from '@angular/core';
import {ProductlistService} from "../../services/productlist/productlist.service";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  productList: string[] = [];
  productName: string = '';

  constructor(private productListService: ProductlistService) {
  }

  ngOnInit() {
    this.productList = this.productListService.getProducts();
  }

  // TODO ADD DATA
  addProduct() {
    console.log(this.productList);
    this.productListService.addProduct(this.productName);
    this.productName = '';
  }

}
