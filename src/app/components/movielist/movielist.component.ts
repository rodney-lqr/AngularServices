import { Component } from '@angular/core';
import {MovielistService} from "../../services/movielist/movielist.service";

@Component({
  selector: 'app-movielist',

  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  movieList: string[] = [];
  movieName: string = '';

  constructor(private movieListService: MovielistService) {
  }

  ngOnInit() {
    this.movieList = this.movieListService.getMovies();
  }

  // TODO ADD DATA
  addMovie() {
    console.log(this.movieList);
    this.movieListService.addMovie(this.movieName);
    this.movieName = '';
  }
}
