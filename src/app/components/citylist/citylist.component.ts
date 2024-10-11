import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CitylistService} from "../../services/citylist/citylist.service";

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrl: './citylist.component.css'
})
export class CitylistComponent {
  cityList: string[] = [];
  cityName: string = '';

  constructor(private cityListService: CitylistService) {
  }

  ngOnInit() {
    this.cityList = this.cityListService.getCities();
  }

  // TODO ADD DATA
  addCity() {
    console.log(this.cityList);
    this.cityListService.addCity(this.cityName);
    this.cityName = '';
  }
}
