import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim.service';
import { SharingServiceService } from 'src/app/_core/services/sharing-service.service';

@Component({
  selector: 'app-list-phim',
  templateUrl: './list-phim.component.html',
  styleUrls: ['./list-phim.component.scss']
})
export class ListPhimComponent implements OnInit {
  constructor(private service : PhimService , private sharingData : SharingServiceService) { }
  dsPhim = [];
  ngOnInit() {
    this.LayDanhSachPhim();
  }
  // Lấy danh sách phim từ API
  LayDanhSachPhim(){
    const url = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP02";
    this.service.get(url).subscribe((res :any)=>{
      console.log(res);
      this.dsPhim = res;
      this.sharingData.sharingDataListMovie(res);
      
    })
  }
}
