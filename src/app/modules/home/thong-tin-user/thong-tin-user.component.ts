import { Component, OnInit, ViewChild } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-thong-tin-user',
  templateUrl: './thong-tin-user.component.html',
  styleUrls: ['./thong-tin-user.component.scss']
})
export class ThongTinUserComponent implements OnInit {
  // @ViewChild("userInfo") userInfo:NgForm;
  public formCapNhat : FormGroup
  constructor(private service : PhimService) { }
  nguoiDung : {};
  userLogin = JSON.parse(localStorage.getItem('userLogin'));

  ngOnInit() {
    let userLogin = JSON.parse(localStorage.getItem('userLogin'));
    this.ChiTietNguoiDung();
    this.formCapNhat = new FormGroup({
      'HoTen' : new FormControl(userLogin.TaiKhoan),
      'Email' : new FormControl(userLogin.Email),
      'SoDT' : new FormControl(userLogin.SoDT)
    })
  }
  ChiTietNguoiDung(){
    let userLogin = JSON.parse(localStorage.getItem('userLogin'));
    const url = `QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${userLogin.TaiKhoan}`
    this.service.post(url).subscribe(res=>{
      console.log(res);
      this.nguoiDung = res;
      
    })
  }
  capNhat(){
    // let userLogin = JSON.parse(localStorage.getItem('userLogin'));
    let objUser = {
      HoTen : this.formCapNhat.value.HoTen,
      Email : this.formCapNhat.value.Email,
      SoDT : this.formCapNhat.value.SoDT,
      TaiKhoan : this.userLogin.TaiKhoan,
      MatKhau : this.userLogin.MatKhau,
      MaLoaiNguoiDung: 'KhachHang',
      MaNhom: 'GP01',
    }
    
    const url = `QuanLyNguoiDung/CapNhatThongTin`;
    this.service.post(url,objUser).subscribe(res=>{
      if(typeof res ==='object'){
        Swal.fire({
          title: 'Cập nhật thành công !',
          type: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK !'
        }).then((result) => {
          if (result.value) {
            localStorage.setItem('userLogin',JSON.stringify(res));
            location.href="";

          }
        })
      }
    })
  }
}
