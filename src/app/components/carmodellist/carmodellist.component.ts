import { Component } from '@angular/core';
import {CarmodellistService} from "../../services/carmodellist/carmodellist.service";

@Component({
  selector: 'app-carmodellist',
  templateUrl: './carmodellist.component.html',
  styleUrl: './carmodellist.component.css'
})
export class CarmodellistComponent {
  carModelList: string[] = [];
  carModelName: string = '';

  constructor(private carModelListService: CarmodellistService) {
  }

  ngOnInit() {
    this.carModelList = this.carModelListService.getCarModels();
  }

  // TODO ADD DATA
  addCarModel() {
    console.log(this.carModelList);
    this.carModelListService.addCarModel(this.carModelName);
    this.carModelName = '';
  }
}
