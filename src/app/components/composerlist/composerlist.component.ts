import { Component } from '@angular/core';
import {ComposerlistService} from "../../services/composerlist/composerlist.service";

@Component({
  selector: 'app-composerlist',

  templateUrl: './composerlist.component.html',
  styleUrl: './composerlist.component.css'
})
export class ComposerlistComponent {
  composerList: string[] = [];
  composerName: string = '';

  constructor(private composerListService: ComposerlistService) {
  }

  ngOnInit() {
    this.composerList = this.composerListService.getComposers();
  }

  // TODO ADD DATA
  addComposer() {
    console.log(this.composerList);
    this.composerListService.addComposer(this.composerName);
    this.composerName = '';
  }
}
