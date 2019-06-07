import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DangKyComponent } from 'src/app/modules/home/form/dang-ky/dang-ky.component';
import { DangNhapComponent } from 'src/app/modules/home/form/dang-nhap/dang-nhap.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivedGuard implements CanDeactivate<DangKyComponent> {
  canDeactivate(component){
    return (
      component.canDeactivate() || window.confirm("Bạn chắc chưa ?")
    );
  }
}
