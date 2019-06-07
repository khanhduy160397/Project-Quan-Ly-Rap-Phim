import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHomeShowingComponent } from './item-home-showing.component';

describe('ItemHomeShowingComponent', () => {
  let component: ItemHomeShowingComponent;
  let fixture: ComponentFixture<ItemHomeShowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemHomeShowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemHomeShowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
