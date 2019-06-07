import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-danh-sach-nguoi-dung',
  templateUrl: './danh-sach-nguoi-dung.component.html',
  styleUrls: ['./danh-sach-nguoi-dung.component.scss']
})
export class DanhSachNguoiDungComponent implements OnInit {

  constructor() { }
  dsNguoiDung:[];
  ngOnInit() {
  }
 

  
}
