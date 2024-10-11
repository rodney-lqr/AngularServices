import { Component } from '@angular/core';
import {EmployeeService} from "../../services/employeelist/employee.service";

@Component({
  selector: 'app-employeelist',

  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  employeeList: string[] = [];
  employeeName: string = '';

  constructor(private employeeListService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeList = this.employeeListService.getEmployee();
  }

  // TODO ADD DATA
  addEmployee() {
    console.log(this.employeeList);
    this.employeeListService.addEmployee(this.employeeName);
    this.employeeName = '';
  }

}
