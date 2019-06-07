import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShowingMovieComponent } from './home-showing-movie.component';

describe('HomeShowingMovieComponent', () => {
  let component: HomeShowingMovieComponent;
  let fixture: ComponentFixture<HomeShowingMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeShowingMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeShowingMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
