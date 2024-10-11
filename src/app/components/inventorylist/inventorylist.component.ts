import { Component } from '@angular/core';
import {InventorylistService} from "../../services/inventorylist/inventorylist.service";

@Component({
  selector: 'app-inventorylist',

  templateUrl: './inventorylist.component.html',
  styleUrl: './inventorylist.component.css'
})
export class InventorylistComponent {
  inventoryList: string[] = [];
  inventoryName: string = '';

  constructor(private inventoryListService: InventorylistService) {
  }

  ngOnInit() {
    this.inventoryList = this.inventoryListService.getInventories();
  }

  // TODO ADD DATA
  addInventory() {
    console.log(this.inventoryList);
    this.inventoryListService.addInventory(this.inventoryName);
    this.inventoryName = '';
  }

}
