import { Component } from '@angular/core';
import {ContactlistService} from "../../services/contactlist/contactlist.service";

@Component({
  selector: 'app-phonecontactlist',

  templateUrl: './phonecontactlist.component.html',
  styleUrl: './phonecontactlist.component.css'
})
export class PhonecontactlistComponent {
  contactList: string[] = [];
  contactName: string = '';

  constructor(private contactListService: ContactlistService) {
  }

  ngOnInit() {
    this.contactList = this.contactListService.getContacts();
  }

  // TODO ADD DATA
  addContact() {
    console.log(this.contactList);
    this.contactListService.addContact(this.contactName);
    this.contactName = '';
  }

}
