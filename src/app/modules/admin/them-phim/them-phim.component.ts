import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim.service';
import { Phim } from 'src/app/_core/models/phim';
import Swal from 'sweetalert2'
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-them-phim',
  templateUrl: './them-phim.component.html',
  styleUrls: ['./them-phim.component.scss']
})
export class ThemPhimComponent implements OnInit {

  constructor(private service : PhimService) { }

  ngOnInit() {
  }
  ThemPhim(phim:Phim,imgFile:any){
    phim.MaNhom="GP02 ";
    phim.HinhAnh=imgFile[0].name;
    const urlPhim = "QuanLyPhim/ThemPhimMoi";
    this.service.post(urlPhim,phim).subscribe(res=>{
      if(typeof res === 'object'){
        //Thêm hình ảnh :
        let formData = new FormData();
        const urlUpload = "QuanLyPhim/UploadFile";
        formData.append("Files",imgFile[0]);
        formData.append("TenPhim",phim.TenPhim);
        this.service.UploadPhim(formData).subscribe(result=>{
            if(result===true)
            {
              Swal.fire({
                title: 'Thêm phim thành công !',
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK !'
              }).then((result) => {
                if (result.value) {
                  location.href="/admin"
                }
              })
            }
          
        })
      }
    })
  }
}
