import { Component } from '@angular/core';
import {MealplanlistService} from "../../services/mealplanlist/mealplanlist.service";

@Component({
  selector: 'app-mealplanlist',

  templateUrl: './mealplanlist.component.html',
  styleUrl: './mealplanlist.component.css'
})
export class MealplanlistComponent {
  mealPlanList: string[] = [];
  mealPlanName: string = '';

  constructor(private mealPlanListService: MealplanlistService) {
  }

  ngOnInit() {
    this.mealPlanList = this.mealPlanListService.getMealPlans();
  }

  // TODO ADD DATA
  addMealPlan() {
    console.log(this.mealPlanList);
    this.mealPlanListService.addMealPlan(this.mealPlanName);
    this.mealPlanName = '';
  }
}
