import { Component } from '@angular/core';
import {ToollistService} from "../../services/toollist/toollist.service";

@Component({
  selector: 'app-toollist',

  templateUrl: './toollist.component.html',
  styleUrl: './toollist.component.css'
})
export class ToollistComponent {
  toolList: string[] = [];
  toolName: string = '';

  constructor(private toolListService:ToollistService) {
  }

  ngOnInit() {
    this.toolList = this.toolListService.getTools();
  }

  // TODO ADD DATA
  addTool() {
    console.log(this.toolList);
    this.toolListService.addTool(this.toolName);
    this.toolName = '';
  }

}
