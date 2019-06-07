import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PhimService } from 'src/app/_core/services/phim.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() movie;
  constructor(private router : Router,private service : PhimService) { }

  ngOnInit() {
  }
  CapNhat(){
      this.router.navigate(
        ["/admin/danh-sach-phim/sua",this.movie.MaPhim]
      )  
    
  }
  XoaPhim(){
    const url =`QuanLyPhim/XoaPhim?MaPhim=${this.movie.MaPhim}`;
    this.service.delete(url).subscribe(res=>{
      console.log(res);
      if(res === 'Xóa phim thành công!')
      {
        Swal.fire({
          title: 'Xóa phim thành công !',
          type: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK !'
        }).then((result) => {
          if (result.value) {
            location.href="/admin/danh-sach-phim/phim"
          }
        })
      }
      }
    )
  }
}
