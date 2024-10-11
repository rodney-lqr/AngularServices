import { Component } from '@angular/core';
import {ArtistlistService} from "../../services/artistlist/artistlist.service";

@Component({
  selector: 'app-artistlist',

  templateUrl: './artistlist.component.html',
  styleUrl: './artistlist.component.css'
})
export class ArtistlistComponent {
  artistList: string[] = [];
  artistName: string = '';

  constructor(private artistListService: ArtistlistService) {
  }

  ngOnInit() {
    this.artistList = this.artistListService.getArtists();
  }

  // TODO ADD DATA
  addArtist() {
    console.log(this.artistList);
    this.artistListService.addArtist(this.artistName);
    this.artistName = '';
  }
}
