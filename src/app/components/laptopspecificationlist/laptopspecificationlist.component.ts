import { Component } from '@angular/core';
import {LaptopspecificationlistService} from "../../services/laptopspecificationlist/laptopspecificationlist.service";

@Component({
  selector: 'app-laptopspecificationlist',

  templateUrl: './laptopspecificationlist.component.html',
  styleUrl: './laptopspecificationlist.component.css'
})
export class LaptopspecificationlistComponent {
  laptopSpecList: string[] = [];
  laptopSpecName: string = '';

  constructor(private laptopSpecListService: LaptopspecificationlistService) {
  }

  ngOnInit() {
    this.laptopSpecList = this.laptopSpecListService.getLaptopSpecs();
  }

  // TODO ADD DATA
  addLaptopSpec() {
    console.log(this.laptopSpecList);
    this.laptopSpecListService.addLaptopSpec(this.laptopSpecName);
    this.laptopSpecName = '';
  }

}
