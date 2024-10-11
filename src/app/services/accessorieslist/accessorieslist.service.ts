import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessorieslistService {
  private accessories: string[] = [];

  constructor() { }

  // TODO GET
  getAccessories(): string[] {
    return this.accessories;
  }

  // TODO ADD
  addAccessories(accessory: string): void {
    this.accessories.push(accessory);
  }
}
