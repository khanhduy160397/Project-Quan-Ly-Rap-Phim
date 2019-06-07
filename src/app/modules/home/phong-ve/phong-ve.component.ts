import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/_core/services/phim.service';
import { SharingServiceService } from 'src/app/_core/services/sharing-service.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-phong-ve',
  templateUrl: './phong-ve.component.html',
  styleUrls: ['./phong-ve.component.scss']
})
export class PhongVeComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private service : PhimService,private shareData : SharingServiceService) { }
  dsGhe=[];
  danhSachGheDangChon=[];
  chiTietPhim = {};
  ghe:any;
  tongCong:number = 0;
  ngOnInit() {
    this.LayDanhSachGhe();
    this.Ghe();
    this.shareData.shareDetailPhim.subscribe((res : any)=>{
      this.chiTietPhim = res;
      console.log(this.chiTietPhim);
      
    })
  }

  LayDanhSachGhe(){
    this.ghe=this.activatedRoute.snapshot.paramMap.get('id');
  }
  Ghe(){
    const url=`QuanLyPhim/ChiTietPhongVe?MaLichChieu=${this.ghe}`
    this.service.get(url).subscribe((res :any )=>{
      this.dsGhe=res;
      console.log(res);
      
    })
  }
  datGhe(objGhe){
    if(objGhe.dangChon){
      this.danhSachGheDangChon.push(objGhe.ghe);
      this.tongCong+=objGhe.ghe.GiaVe;
      console.log(this.tongCong);
      console.log(objGhe);
      console.log(this.danhSachGheDangChon);
      
      
    }else{
      this.danhSachGheDangChon.map((item, index) =>{
        if(item.MaGhe === objGhe.ghe.MaGhe){
          this.danhSachGheDangChon.splice(index, 1);
          this.tongCong-=objGhe.ghe.GiaVe;
        }
      });
    }
  }
  muaVe(){
    let userLogin = JSON.parse(localStorage.getItem('userLogin'));
    console.log(userLogin);
    let objMuaVe = {
      MaLichChieu : this.ghe,
      TaiKhoanNguoiDung : userLogin.TaiKhoan,
      DanhSachVe : this.danhSachGheDangChon,
    }
    console.log(objMuaVe);
    const url ="QuanLyDatVe/DatVe"
    if(objMuaVe.DanhSachVe.length !== 0){
      this.service.post(url,objMuaVe).subscribe(res=>{
        console.log(res);
        if(res === 'Đặt vé thành công!')
        {
          Swal.fire({
            title: 'Đặt vé thành công !',
            type: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK !'
          }).then((result) => {
            if (result.value) {
              location.href=""
            }
          })
        }
      })
  
    }
    else{
      Swal.fire({
        title: 'Chưa chọn ghế  !',
        type: 'warning',
      })
    }

  }  
}
