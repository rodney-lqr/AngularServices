import { Component } from '@angular/core';
import {BudgetlistService} from "../../services/budgetlist/budgetlist.service";

@Component({
  selector: 'app-budgetlist',

  templateUrl: './budgetlist.component.html',
  styleUrl: './budgetlist.component.css'
})
export class BudgetlistComponent {
  budgetList: string[] = [];
  budgetName: string = '';

  constructor(private budgetListService: BudgetlistService) {
  }

  ngOnInit() {
    this.budgetList = this.budgetListService.getBudgets();
  }

  // TODO ADD DATA
  addBudget() {
    console.log(this.budgetList);
    this.budgetListService.addBudget(this.budgetName);
    this.budgetName = '';
  }
}
