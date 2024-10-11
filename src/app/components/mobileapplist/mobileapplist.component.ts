import { Component } from '@angular/core';
import {MobileapplistService} from "../../services/mobileapplist/mobileapplist.service";

@Component({
  selector: 'app-mobileapplist',

  templateUrl: './mobileapplist.component.html',
  styleUrl: './mobileapplist.component.css'
})
export class MobileapplistComponent {
  mobileAppList: string[] = [];
  mobileAppName: string = '';

  constructor(private mobileAppListService: MobileapplistService) {
  }

  ngOnInit() {
    this.mobileAppList = this.mobileAppListService.getMobileApps();
  }

  // TODO ADD DATA
  addMobileApp() {
    console.log(this.mobileAppList);
    this.mobileAppListService.addMobileApp(this.mobileAppName);
    this.mobileAppName = '';
  }
}
