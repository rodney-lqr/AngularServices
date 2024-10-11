import { Component } from '@angular/core';
import {LaptoplistService} from "../../services/laptoplist/laptoplist.service";


@Component({
  selector: 'app-laptoplist',

  templateUrl: './laptoplist.component.html',
  styleUrl: './laptoplist.component.css'
})
export class LaptoplistComponent {
  laptopList: string[] = [];
  laptopName: string = '';

  constructor(private laptopListService: LaptoplistService) {
  }
  ngOnInit() {
    this.laptopList = this.laptopListService.getLaptops();
  }

  // TODO ADD DATA
  addLaptop() {
    console.log(this.laptopList);
    this.laptopListService.addLaptop(this.laptopName);
    this.laptopName = '';
  }
}
