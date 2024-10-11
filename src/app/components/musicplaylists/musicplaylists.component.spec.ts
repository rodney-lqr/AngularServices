import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicplaylistsComponent } from './musicplaylists.component';

describe('MusicplaylistsComponent', () => {
  let component: MusicplaylistsComponent;
  let fixture: ComponentFixture<MusicplaylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicplaylistsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicplaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
