import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { NgLocalization } from '@angular/common';
@Component({
  selector: 'app-nguoi-dung',
  templateUrl: './nguoi-dung.component.html',
  styleUrls: ['./nguoi-dung.component.scss']
})
export class NguoiDungComponent implements OnInit {

  constructor(private service : PhimService, private router :Router) { }
  dsNguoiDung=[];
  nguoiDung={}
    ngOnInit() {
    this.LayDSNguoiDung();

  }
  LayDSNguoiDung(){
    this.service.get('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01').subscribe(res=>{
      this.dsNguoiDung = res;
    })
  }
  CapNhat(){
}
sua(TaiKhoan){
  const url = `QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${TaiKhoan}`
  this.service.post(url).subscribe(res=>{
    console.log(res);
    this.nguoiDung = res;
    localStorage.setItem('chiTietUser',JSON.stringify(res));
    this.router.navigate(["/admin/sua"]);
  })
}

  xoa(TaiKhoan){
    const url =`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${TaiKhoan}`;
    this.service.delete(url).subscribe(res=>{
      console.log(res);
      if(res === "Xóa người dùng thành công")
      {
        Swal.fire({
          title: 'Xóa người dùng thành công !',
          type: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK !'
        }).then((result) => {
          if (result.value) {
            location.href="/admin/nguoi-dung";
          }
        })
      }
      }
    )      
  }
}
