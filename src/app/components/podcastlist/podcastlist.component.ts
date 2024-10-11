import { Component } from '@angular/core';
import {PodcastlistService} from "../../services/podcastlist/podcastlist.service";

@Component({
  selector: 'app-podcastlist',

  templateUrl: './podcastlist.component.html',
  styleUrl: './podcastlist.component.css'
})
export class PodcastlistComponent {
  podcastList: string[] = [];
  podcastName: string = '';

  constructor(private podcastListService: PodcastlistService) {
  }

  ngOnInit() {
    this.podcastList = this.podcastListService.getPodcasts();
  }

  // TODO ADD DATA
  addPodcast() {
    console.log(this.podcastList);
    this.podcastListService.addPodcast(this.podcastName);
    this.podcastName = '';
  }
}
