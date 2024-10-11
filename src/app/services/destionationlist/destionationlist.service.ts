import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestionationlistService {
  private destinations: string[] = [];

  constructor() { }

  // TODO GET
  getDestinations(): string[] {
    return this.destinations;
  }

  // TODO ADD
  addDestination(destination: string): void {
    this.destinations.push(destination);
  }
}
