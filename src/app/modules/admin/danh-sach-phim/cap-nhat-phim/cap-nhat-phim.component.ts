import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/_core/services/phim.service';
import { Phim } from 'src/app/_core/models/phim';
import Swal from 'sweetalert2'
import { FormGroup, FormControl } from '@angular/forms';
import { resolve } from 'q';
@Component({
  selector: 'app-cap-nhat-phim',
  templateUrl: './cap-nhat-phim.component.html',
  styleUrls: ['./cap-nhat-phim.component.scss']
})
export class CapNhatPhimComponent implements OnInit {

  constructor(private route : Router , private activatedRoute : ActivatedRoute,private service : PhimService) { }
  id:any;
  dsPhimCapNhat : {};
  public capNhat : FormGroup
  chiTietPhim = JSON.parse(localStorage.getItem('chiTietPhim'));
  ngOnInit() {
    let chiTietPhim = JSON.parse(localStorage.getItem('chiTietPhim'));
    this.getID();
    this.CapNhatPhim();
      // this.capNhat = new FormGroup({
      //   'MaPhim' : new FormControl(chiTietPhim.MaPhim),
      //   'TenPhim' : new FormControl(chiTietPhim.TenPhim),
      //   'Trailer' : new FormControl(chiTietPhim.Trailer),
      //   'MoTa' : new FormControl(chiTietPhim.MoTa),
      //   'DanhGia' : new FormControl(chiTietPhim.DanhGia),
      //   'NgayKhoiChieu' : new FormControl(chiTietPhim.NgayKhoiChieu),
      // })
  }
  getID(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }
  CapNhatPhim(){
    const url = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.id}`;
    
      this.service.get(url).subscribe(res=>{
        console.log(res);
        this.dsPhimCapNhat = res;
        localStorage.setItem('chiTietPhim',JSON.stringify(res));
      })
  }
  CapNhat(phim:Phim){
    phim.MaNhom = "GP02";
    const urlPhim = "QuanLyPhim/CapNhatPhim";
      this.service.post(urlPhim,phim).subscribe(res=>{
      if(typeof res === 'object'){
        //Thêm hình ảnh :
              Swal.fire({
                title: 'Cập nhật phim thành công !',
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK !'
              }).then((result) => {
                if (result.value) {
                  localStorage.removeItem('chiTietPhim')
                  location.href="/danh-sach-phim/phim"
                }
              })
            }
        else{
          Swal.fire({
            title: 'Lỗi , hãy nhập mã phim !',
            type: 'warning',
          })
        }
          
        })
  
  }
}

