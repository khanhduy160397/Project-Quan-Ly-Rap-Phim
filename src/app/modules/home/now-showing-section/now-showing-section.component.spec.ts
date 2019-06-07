import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowShowingSectionComponent } from './now-showing-section.component';

describe('NowShowingSectionComponent', () => {
  let component: NowShowingSectionComponent;
  let fixture: ComponentFixture<NowShowingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowShowingSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowShowingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
