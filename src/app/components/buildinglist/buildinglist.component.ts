import { Component } from '@angular/core';
import {BuildinglistService} from "../../services/buildinglist/buildinglist.service";

@Component({
  selector: 'app-buildinglist',

  templateUrl: './buildinglist.component.html',
  styleUrl: './buildinglist.component.css'
})
export class BuildinglistComponent {
  buildingList: string[] = [];
  buildingName: string = '';

  constructor(private buildingListService: BuildinglistService) {
  }

  ngOnInit() {
    this.buildingList = this.buildingListService.getBuildings();
  }

  // TODO ADD DATA
  addBuilding() {
    console.log(this.buildingList);
    this.buildingListService.addBuilding(this.buildingName);
    this.buildingName = '';
  }
}
