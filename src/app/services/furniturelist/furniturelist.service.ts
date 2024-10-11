import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FurniturelistService {
  private furnitures: string[] = [];

  constructor() { }

  // TODO GET
  getFurnitures(): string[] {
    return this.furnitures;
  }

  // TODO ADD
  addFurnitures(furniture: string): void {
    this.furnitures.push(furniture);
  }
}
