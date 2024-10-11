import { Component } from '@angular/core';
import {DevelopertoollistService} from "../../services/developertoollist/developertoollist.service";

@Component({
  selector: 'app-developertoollist',

  templateUrl: './developertoollist.component.html',
  styleUrl: './developertoollist.component.css'
})
export class DevelopertoollistComponent {
  devToolList: string[] = [];
  devToolName: string = '';

  constructor(private studentListService: DevelopertoollistService) {
  }

  ngOnInit() {
    this.devToolList = this.studentListService.getDeveloperTools();
  }

  // TODO ADD DATA
  addDeveloperTool() {
    console.log(this.devToolList);
    this.studentListService.addDeveloperTools(this.devToolName);
    this.devToolName = '';
  }
}
