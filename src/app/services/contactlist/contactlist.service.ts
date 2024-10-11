import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactlistService {
  private contacts: string[] = [];

  constructor() { }

  // TODO GET
  getContacts(): string[] {
    return this.contacts;
  }

  // TODO ADD
  addContact(contact: string): void {
    this.contacts.push(contact);
  }
}
