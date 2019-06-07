import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  userLogin = JSON.parse(localStorage.getItem('userLogin'));
  ngOnInit() {
  }
  dangXuat(){
    Swal.fire({
      title: 'Thoát ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK !'
    }).then((result) => {
      if (result.value) {
        localStorage.removeItem('userLogin');
        location.href ="";
       }
    })
    
  }
}
