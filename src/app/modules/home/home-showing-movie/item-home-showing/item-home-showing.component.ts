import { Component, OnInit, Input } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-item-home-showing',
  templateUrl: './item-home-showing.component.html',
  styleUrls: ['./item-home-showing.component.scss']
})
export class ItemHomeShowingComponent implements OnInit {

  constructor() { }
  @Input() movie;
  ngOnInit() {
  }

}
