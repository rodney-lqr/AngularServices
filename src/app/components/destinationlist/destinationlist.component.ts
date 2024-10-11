import { Component } from '@angular/core';
import {DestionationlistService} from "../../services/destionationlist/destionationlist.service";

@Component({
  selector: 'app-destinationlist',

  templateUrl: './destinationlist.component.html',
  styleUrl: './destinationlist.component.css'
})
export class DestinationlistComponent {
  desinationList: string[] = [];
  destinationName: string = '';

  constructor(private destinationListService: DestionationlistService) {
  }
  ngOnInit() {
    this.desinationList = this.destinationListService.getDestinations();
  }
  // TODO ADD DATA
  addDestination() {
    console.log(this.desinationList);
    this.destinationListService.addDestination(this.destinationName);
    this.destinationName = '';
  }
}
