import { Component } from '@angular/core';
import {EventlistService} from "../../services/eventlist/eventlist.service";

@Component({
  selector: 'app-eventlist',

  templateUrl: './eventlist.component.html',
  styleUrl: './eventlist.component.css'
})
export class EventlistComponent {
  eventList: string[] = [];
  eventName: string = '';

  constructor(private eventListService: EventlistService) {
  }

  ngOnInit() {
    this.eventList = this.eventListService.getEvents();
  }

  // TODO ADD DATA
  addEvent() {
    console.log(this.eventList);
    this.eventListService.addEvent(this.eventName);
    this.eventName = '';
  }
}
