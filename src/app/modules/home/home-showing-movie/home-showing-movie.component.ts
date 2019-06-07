import { Component, OnInit, Input } from '@angular/core';
import { SharingServiceService } from 'src/app/_core/services/sharing-service.service';
import { PhimService } from 'src/app/_core/services/phim.service';
import { Router } from '@angular/router';
import { Phim } from 'src/app/_core/models/phim';

@Component({
  selector: 'app-home-showing-movie',
  templateUrl: './home-showing-movie.component.html',
  styleUrls: ['./home-showing-movie.component.scss']
})
export class HomeShowingMovieComponent implements OnInit {

  constructor(private sharingService : SharingServiceService,private service : PhimService, private router : Router) { }
  dsPhim : Phim;
  dsPhimCu:[];
  modalItem : [];
  ngOnInit() {      
    this.getDanhSachPhim();
  }
  getDanhSachPhim() {
    const url = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP02";
    this.service.get(url).subscribe((res :any)=>{
      this.dsPhim = res.splice(0,8);
      // this.dsPhim = res;
      console.log(this.dsPhim);
      this.sharingService.sharingDataModalMovie(this.dsPhim)
      
      
    })
  }
  xemNhanh(){
    this.sharingService.sharingDataModalMovie(this.dsPhim);
  }
  slides = [
    {HinhAnh: "../../../../assets/img/avenger-endgame.jpg",TenPhim: "Avenger : Hồi kết "},
    {HinhAnh: "../../../../assets/img/john-wick.jpg", TenPhim: "John Wick 3 : Sát thủ trở lại"},
    {HinhAnh: "../../../../assets/img/slide-2.jpg",TenPhim: "Pikachu "},
    {HinhAnh: "../../../../assets/img/avenger-endgame.jpg",TenPhim: "Avenger : Hồi kết "},
    {HinhAnh: "../../../../assets/img/avenger-endgame.jpg",TenPhim: "Avenger : Hồi kết "},
    {HinhAnh: "../../../../assets/img/avenger-endgame.jpg",TenPhim: "Avenger : Hồi kết "},
    {HinhAnh: "../../../../assets/img/avenger-endgame.jpg",TenPhim: "Avenger : Hồi kết "},
    {HinhAnh: "../../../../assets/img/avenger-endgame.jpg",TenPhim: "Avenger : Hồi kết "},
    {HinhAnh: "../../../../assets/img/avenger-endgame.jpg",TenPhim: "Avenger : Hồi kết "},
  ];

  slideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 1,
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "dots":true,
    "infinite": false
  };

}
