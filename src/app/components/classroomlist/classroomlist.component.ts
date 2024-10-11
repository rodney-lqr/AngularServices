import { Component } from '@angular/core';
import {ClassroomlistService} from "../../services/classroomlist/classroomlist.service";

@Component({
  selector: 'app-classroomlist',

  templateUrl: './classroomlist.component.html',
  styleUrl: './classroomlist.component.css'
})
export class ClassroomlistComponent {
  classroomList: string[] = [];
  classroomName: string = '';

  constructor(private classroomListService: ClassroomlistService) {
  }

  ngOnInit() {
    this.classroomList = this.classroomListService.getClassrooms();
  }

  // TODO ADD DATA
  addClassroom() {
    console.log(this.classroomList);
    this.classroomListService.addClassroom(this.classroomName);
    this.classroomName = '';
  }

}
