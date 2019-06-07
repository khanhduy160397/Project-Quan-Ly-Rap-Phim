import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim.service';

@Component({
  selector: 'app-list-phim',
  templateUrl: './list-phim.component.html',
  styleUrls: ['./list-phim.component.scss']
})
export class ListPhimComponent implements OnInit {

  constructor(private servie : PhimService) { }
  dsPhim:[];
  ngOnInit() {
    this.GetDanhSachPhim();

  }
  GetDanhSachPhim(){
    const url = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP02"
    this.servie.get(url).subscribe(res=>{
      this.dsPhim = res;
      console.log(res);
      
    })
}}
