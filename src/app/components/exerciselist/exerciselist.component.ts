import { Component } from '@angular/core';
import {ExerciselistService} from "../../services/exerciselist/exerciselist.service";

@Component({
  selector: 'app-exerciselist',

  templateUrl: './exerciselist.component.html',
  styleUrl: './exerciselist.component.css'
})
export class ExerciselistComponent {
  exerciseList: string[] = [];
  exerciseName: string = '';

  constructor(private exerciseListService: ExerciselistService) {
  }

  ngOnInit() {
    this.exerciseList = this.exerciseListService.getExercises();
  }

  // TODO ADD DATA
  addExercise() {
    console.log(this.exerciseList);
    this.exerciseListService.addExercise(this.exerciseName);
    this.exerciseName = '';
  }
}
