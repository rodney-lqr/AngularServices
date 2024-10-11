import { Component } from '@angular/core';
import {AccessorieslistService} from "../../services/accessorieslist/accessorieslist.service";

@Component({
  selector: 'app-accessorylist',

  templateUrl: './accessorylist.component.html',
  styleUrl: './accessorylist.component.css'
})
export class AccessorylistComponent {
  accesoryList: string[] = [];
  accesoryName: string = '';

  constructor(private accessoryListService: AccessorieslistService) {
  }

  ngOnInit() {
    this.accesoryList = this.accessoryListService.getAccessories();
  }

  // TODO ADD DATA
  addAccessory() {
    console.log(this.accesoryList);
    this.accessoryListService.addAccessories(this.accesoryName);
    this.accesoryName = '';
  }
}
