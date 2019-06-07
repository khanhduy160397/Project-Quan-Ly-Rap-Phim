import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthorGuard implements CanActivate {
  constructor(private route : Router) {
    
  }
  canActivate(){
    let userLogin = JSON.parse(localStorage.getItem('userLogin'));
    if(userLogin.MaLoaiNguoiDung !== 'QuanTri'){
      this.route.navigate(['**']);
    }
    return true;
  }
}
