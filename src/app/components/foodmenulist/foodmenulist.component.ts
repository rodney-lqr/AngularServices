import { Component } from '@angular/core';
import {MenulistService} from "../../services/menulist/menulist.service";

@Component({
  selector: 'app-foodmenulist',

  templateUrl: './foodmenulist.component.html',
  styleUrl: './foodmenulist.component.css'
})
export class FoodmenulistComponent {
  menuList: string[] = [];
  menuName: string = '';

  constructor(private menuListService: MenulistService) {
  }

  ngOnInit() {
    this.menuList = this.menuListService.getMenus();
  }

  // TODO ADD DATA
  addMenu() {
    console.log(this.menuList);
    this.menuListService.addMenu(this.menuName);
    this.menuName = '';
  }
}
