import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import NguoiDung from 'src/app/_core/models/NguoiDung';
import { PhimService } from 'src/app/_core/services/phim.service';
import NguoiDungService from 'src/app/_core/services/nguoiDung.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangKyComponent implements OnInit {
  @ViewChild("dangKyForm") dangKyForm:NgForm;

  constructor(private serviceNguoiDung: NguoiDungService ) { }

  ngOnInit() {
  }
  dangKy(user){
    let objNguoiDung = {
      TaiKhoan : user.taiKhoanDK,
      MatKhau : user.matKhauDK,
      Email : user.email,
      HoTen : user.hoTen,
      SoDT : user.soDT,
      MaNhom : "GP01",
      MaLoaiNguoiDung : "KhachHang"
    }       
    console.log(objNguoiDung);
    
    const url ="QuanLyNguoiDung/ThemNguoiDung";
    this.serviceNguoiDung.post(url,objNguoiDung).subscribe(res=>{
      console.log(res);
      if(typeof res ==='object'){
        Swal.fire({
          title: 'Đăng ký thành công !',
          type: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK !'
        }).then((result) => {
          if (result.value) {
            location.href=""
          }
        })
      }
      else{
        Swal.fire({
          title: 'Tài khoản đã tồn tại !',
          type: 'warning',
        })
      }
    })

  }
}
