import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenulistService {
  private menus: string[] = [];

  constructor() { }

  // TODO GET
  getMenus(): string[] {
    return this.menus;
  }

  // TODO ADD
  addMenu(menu: string): void {
    this.menus.push(menu);
  }
}
