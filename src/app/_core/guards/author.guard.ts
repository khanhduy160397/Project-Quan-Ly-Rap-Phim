import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorGuard implements CanActivate  {
    
  constructor(private route : Router) {
    
  }
  canActivate(){
    if(!localStorage.getItem('userLogin')){
      this.route.navigate(['/dang-nhap']);
    }
    return true;
  }
  
}
