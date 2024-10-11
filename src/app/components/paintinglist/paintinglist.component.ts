import { Component } from '@angular/core';
import {PaintinglistService} from "../../services/paintinglist/paintinglist.service";

@Component({
  selector: 'app-paintinglist',

  templateUrl: './paintinglist.component.html',
  styleUrl: './paintinglist.component.css'
})
export class PaintinglistComponent {
  paintingList: string[] = [];
  paintingName: string = '';

  constructor(private paintingListService: PaintinglistService) {
  }

  ngOnInit() {
    this.paintingList = this.paintingListService.getPaintings();
  }

  // TODO ADD DATA
  addPainting() {
    console.log(this.paintingList);
    this.paintingListService.addPainting(this.paintingName);
    this.paintingName = '';
  }
}
