import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ThemPhimComponent } from './them-phim/them-phim.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { SuaPhimComponent } from './danh-sach-phim/sua-phim/sua-phim.component';
import { ListPhimComponent } from './danh-sach-phim/list-phim/list-phim.component';
import { CapNhatPhimComponent } from './danh-sach-phim/cap-nhat-phim/cap-nhat-phim.component';
import { DanhSachNguoiDungComponent } from './danh-sach-nguoi-dung/danh-sach-nguoi-dung.component';
import { CapNhatNguoiDungComponent } from './danh-sach-nguoi-dung/cap-nhat-nguoi-dung/cap-nhat-nguoi-dung.component';
import { NguoiDungComponent } from './danh-sach-nguoi-dung/nguoi-dung/nguoi-dung.component';

const routes: Routes = [
  {
    path : '' , component : AdminComponent , children : [
      {
      path:'them-phim',component:ThemPhimComponent
    },
    {
      path:'danh-sach-phim',component:DanhSachPhimComponent,children: [
        {
          path:'sua/:id',component: CapNhatPhimComponent
        },
        {
          path:'phim',component:ListPhimComponent
        }
      ]
    },
    {
      path:'',component:DanhSachNguoiDungComponent,children:[
      {
        path:'nguoi-dung', component:NguoiDungComponent
      },
      {
        path:'sua',component:CapNhatNguoiDungComponent
      }
    ]
    }
    
    
  ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
