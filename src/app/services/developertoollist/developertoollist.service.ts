import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevelopertoollistService {
  private developerTools: string[] = [];

  constructor() { }

  // TODO GET
  getDeveloperTools(): string[] {
    return this.developerTools;
  }

  // TODO ADD
  addDeveloperTools(devTool: string): void {
    this.developerTools.push(devTool);
  }
}
