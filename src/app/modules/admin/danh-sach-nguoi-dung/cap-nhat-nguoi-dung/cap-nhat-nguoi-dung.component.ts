import { Component, OnInit } from '@angular/core';
import { JSONP_ERR_WRONG_METHOD } from '@angular/common/http/src/jsonp';
import { FormGroup, FormControl } from '@angular/forms';
import { PhimService } from 'src/app/_core/services/phim.service';
import Swal from 'sweetalert2'
import NguoiDung from 'src/app/_core/models/NguoiDung';
@Component({
  selector: 'app-cap-nhat-nguoi-dung',
  templateUrl: './cap-nhat-nguoi-dung.component.html',
  styleUrls: ['./cap-nhat-nguoi-dung.component.scss']
})
export class CapNhatNguoiDungComponent implements OnInit {

  constructor(private service : PhimService) { }
  nguoiDung = JSON.parse(localStorage.getItem('chiTietUser'));
  nguoiDung2 : {};
  public formCapNhat : FormGroup
  ngOnInit() {
    let nguoiDungg = JSON.parse(localStorage.getItem('chiTietUser'));
    console.log(this.nguoiDung);
  }

  CapNhat(user:NguoiDung){
    const url = `QuanLyNguoiDung/CapNhatThongTin`;
    this.service.post(url,user).subscribe(res=>{
      if(typeof res ==='object'){
        Swal.fire({
          title: 'Cập nhật thành công !',
          type: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK !'
        }).then((result) => {
          if (result.value) {
            location.href="/admin/nguoi-dung";
          }
        })
      }
      else{
        console.log(res);
        
      }
    })
 
  }
}
