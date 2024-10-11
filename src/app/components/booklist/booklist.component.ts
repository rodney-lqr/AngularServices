import { Component } from '@angular/core';
import {BooklistService} from "../../services/booklist/booklist.service";

@Component({
  selector: 'app-booklist',

  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {

  bookList: string[] = [];
  bookName: string = '';

  constructor(private bookListService: BooklistService) {
  }

  ngOnInit() {
    this.bookList = this.bookListService.getBooks();
  }

  // TODO ADD DATA
  addBook() {
    console.log(this.bookList);
    this.bookListService.addBook(this.bookName);
    this.bookName = '';
  }


}
