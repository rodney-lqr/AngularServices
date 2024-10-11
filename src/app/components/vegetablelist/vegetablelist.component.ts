import { Component } from '@angular/core';
import {VegetablelistService} from "../../services/vegetablelist/vegetablelist.service";

@Component({
  selector: 'app-vegetablelist',

  templateUrl: './vegetablelist.component.html',
  styleUrl: './vegetablelist.component.css'
})
export class VegetablelistComponent {
  vegetableList: string[] = [];
  vegetableName: string = '';

  constructor(private vegetableListService: VegetablelistService) {
  }

  ngOnInit() {
    this.vegetableList = this.vegetableListService.getVegetables();
  }

  // TODO ADD DATA
  addVegetable() {
    console.log(this.vegetableList);
    this.vegetableListService.addVegetable(this.vegetableName);
    this.vegetableName = '';
  }

}
