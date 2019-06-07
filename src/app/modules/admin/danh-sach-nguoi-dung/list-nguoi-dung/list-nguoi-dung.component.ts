import { Component, OnInit, Input } from '@angular/core';
import NguoiDung from 'src/app/_core/models/NguoiDung';

@Component({
  selector: 'app-list-nguoi-dung',
  templateUrl: './list-nguoi-dung.component.html',
  styleUrls: ['./list-nguoi-dung.component.scss']
})
export class ListNguoiDungComponent implements OnInit {

  constructor() { }
  @Input() nguoiDung;
  ngOnInit() {
  }

}
