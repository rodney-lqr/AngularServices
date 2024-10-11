import { Component } from '@angular/core';
import {FruitlistService} from "../../services/fruitlist/fruitlist.service";

@Component({
  selector: 'app-fruitlist',

  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.css'
})
export class FruitlistComponent {
  fruitList: string[] = [];
  fruitName: string = '';

  constructor(private fruitListService: FruitlistService) {
  }

  ngOnInit() {
    this.fruitList = this.fruitListService.getFruit();
  }

  // TODO ADD DATA
  addFruit() {
    console.log(this.fruitList);
    this.fruitListService.addFruit(this.fruitName);
    this.fruitName = '';
  }


}
