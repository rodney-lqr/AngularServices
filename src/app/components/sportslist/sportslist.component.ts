import { Component } from '@angular/core';
import {SportlistService} from "../../services/sportlist/sportlist.service";

@Component({
  selector: 'app-sportslist',

  templateUrl: './sportslist.component.html',
  styleUrl: './sportslist.component.css'
})
export class SportslistComponent {
  sportsList: string[] = [];
  sportsName: string = '';

  constructor(private sportsListService: SportlistService) {
  }

  ngOnInit() {
    this.sportsList = this.sportsListService.getSports();
  }

  // TODO ADD DATA
  addSport() {
    console.log(this.sportsList);
    this.sportsListService.addSport(this.sportsName);
    this.sportsName = '';
  }
}
