import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PhimService } from 'src/app/_core/services/phim.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss'],
  styles : [`
  input.ng-valid{
    border-left: 5px solid green!important;
  }
  input.ng-invalid{
    border-left: 5px solid red!important;
  }
  `]
})
export class DangNhapComponent implements OnInit {
  @ViewChild("login") login:NgForm;

  constructor(private service : PhimService) { }

  ngOnInit() {
  }
  dangNhap(user:any){
    const url = `QuanLyNguoiDung/DangNhap?TaiKhoan=${user.taiKhoan}&MatKhau=${user.matKhau}`;
    this.service.post(url).subscribe((res :any)=>{
      console.log(res);
      if(typeof res == 'object'){
        Swal.fire({
          title: 'Đăng nhập thành công !',
          type: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK !'
        }).then((result) => {
          if (result.value) {
            localStorage.setItem('userLogin',JSON.stringify(res));
            location.href="/"
          }
        })
        
      }
      else{
        Swal.fire({
          title: 'Tài khoản hoặc mật khẩu sai !',
          type: 'warning',
        })
      }
    })

  }
}
