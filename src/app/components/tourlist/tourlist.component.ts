import { Component } from '@angular/core';
import {TourlistService} from "../../services/tourlist/tourlist.service";

@Component({
  selector: 'app-tourlist',

  templateUrl: './tourlist.component.html',
  styleUrl: './tourlist.component.css'
})
export class TourlistComponent {
  tourList: string[] = [];
  tourName: string = '';

  constructor(private tourListService: TourlistService) {
  }

  ngOnInit() {
    this.tourList = this.tourListService.getTours();
  }

  // TODO ADD DATA
  addTour() {
    console.log(this.tourList);
    this.tourListService.addTour(this.tourName);
    this.tourName = '';
  }

}
