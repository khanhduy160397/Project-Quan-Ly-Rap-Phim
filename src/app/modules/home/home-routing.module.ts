import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { NowShowingSectionComponent } from './now-showing-section/now-showing-section.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { ThongTinUserComponent } from './thong-tin-user/thong-tin-user.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthorGuard } from 'src/app/_core/guards/author.guard';

const routes: Routes = [
  {
    path : '' , component : HomeComponent , children : [{
      
        path : 'danh-sach-phim' , loadChildren : './danh-sach-phim/danh-sach-phim.module#DanhSachPhimModule'
        
    },
    {
      path : '', component : HomeLayoutComponent
    },
    {
      path:'phong-ve/:id',loadChildren : './phong-ve/phong-ve.module#PhongVeModule' ,
      canActivate : [AuthorGuard]
    },
    {
      path:'',loadChildren:'./form/form.module#FormModule'
    },
    {
      path:'thong-tin',component:ThongTinUserComponent,
      canActivate : [AuthorGuard]

    }

    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
