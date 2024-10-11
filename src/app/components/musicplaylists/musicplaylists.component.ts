import { Component } from '@angular/core';
import {MusiclistService} from "../../services/musiclist/musiclist.service";

@Component({
  selector: 'app-musicplaylists',

  templateUrl: './musicplaylists.component.html',
  styleUrl: './musicplaylists.component.css'
})
export class MusicplaylistsComponent {
  musicList: string[] = [];
  musicName: string = '';

  constructor(private musicListService: MusiclistService) {
  }

  ngOnInit() {
    this.musicList = this.musicListService.getMusics();
  }

  // TODO ADD DATA
  addMusic() {
    console.log(this.musicList);
    this.musicListService.addMusic(this.musicName);
    this.musicName = '';
  }

}
