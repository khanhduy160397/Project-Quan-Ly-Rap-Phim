import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DangNhapComponent } from 'src/app/modules/home/form/dang-nhap/dang-nhap.component';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanDeactivate<DangNhapComponent> {
    canDeactivate(component){
      return (
        component.canDeactivate() || window.confirm("Bạn chắc chưa ?")
      );
    }
}
