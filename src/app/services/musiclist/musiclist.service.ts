import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusiclistService {
  private musics: string[] = [];

  constructor() { }

  // TODO GET
  getMusics(): string[] {
    return this.musics;
  }

  // TODO ADD
  addMusic(music: string): void {
    this.musics.push(music);
  }
}
