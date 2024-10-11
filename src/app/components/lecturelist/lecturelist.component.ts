import { Component } from '@angular/core';
import {LecturelistService} from "../../services/lecturelist/lecturelist.service";

@Component({
  selector: 'app-lecturelist',

  templateUrl: './lecturelist.component.html',
  styleUrl: './lecturelist.component.css'
})
export class LecturelistComponent {
  lectureList: string[] = [];
  lectureName: string = '';

  constructor(private lectureListService: LecturelistService) {
  }

  ngOnInit() {
    this.lectureList = this.lectureListService.getLectures();
  }

  // TODO ADD DATA
  addLecture() {
    console.log(this.lectureList);
    this.lectureListService.addLecture(this.lectureName);
    this.lectureName = '';
  }
}
