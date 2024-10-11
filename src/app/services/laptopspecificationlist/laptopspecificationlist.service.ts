import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaptopspecificationlistService {
  private laptopSpecs: string[] = [];

  constructor() { }

  // TODO GET
  getLaptopSpecs(): string[] {
    return this.laptopSpecs;
  }

  // TODO ADD
  addLaptopSpec(LaptopSpecification: string): void {
    this.laptopSpecs.push(LaptopSpecification);
  }
}
