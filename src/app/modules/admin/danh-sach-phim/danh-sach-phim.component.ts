import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim.service';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  dsPhim : [];
  constructor(private servie : PhimService) { }

  ngOnInit() {
  }
  
  }
