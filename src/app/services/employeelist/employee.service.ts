import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employee: string[] = [];

  constructor() { }

  // TODO GET
  getEmployee(): string[] {
    return this.employee;
  }

  // TODO ADD
  addEmployee(employee: string): void {
    this.employee.push(employee);
  }
}
