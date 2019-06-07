import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim.service';
import { ActivatedRoute } from '@angular/router';
import { SharingServiceService } from 'src/app/_core/services/sharing-service.service';

@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./phim.component.scss','./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {

  constructor(private service : PhimService, private activeRoute : ActivatedRoute, private sharingData : SharingServiceService) { }
  idPhim : any;
  chiTietPhim:{};
  ngOnInit() {
    this.getIdPhim();
    this.ChiTietPhim();
  }

  getIdPhim () {
    this.idPhim = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.idPhim);
    
  }

  ChiTietPhim(){
    const url =`QuanLyPhim/LayChiTietPhim?MaPhim=${this.idPhim}`;
    this.service.get(url).subscribe((res : any)=>{
      this.chiTietPhim = res;
      console.log(res);
      this.sharingData.sharingDataDetailPhim(res);
    })
  }
}
