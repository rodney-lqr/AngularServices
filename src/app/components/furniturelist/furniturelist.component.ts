import { Component } from '@angular/core';
import {FurniturelistService} from "../../services/furniturelist/furniturelist.service";

@Component({
  selector: 'app-furniturelist',

  templateUrl: './furniturelist.component.html',
  styleUrl: './furniturelist.component.css'
})
export class FurniturelistComponent {
  furnitureList: string[] = [];
  furnitureName: string = '';

  constructor(private furnitureListService: FurniturelistService) {
  }

  ngOnInit() {
    this.furnitureList = this.furnitureListService.getFurnitures();
  }

  // TODO ADD DATA
  addFurniture() {
    console.log(this.furnitureList);
    this.furnitureListService.addFurnitures(this.furnitureName);
    this.furnitureName = '';
  }
}
