import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { HomeShowingMovieComponent } from './home-showing-movie/home-showing-movie.component';
import { MaterialModule } from 'src/app/share_modules/material.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OwlModule } from 'ngx-owl-carousel';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { FooterComponent } from './footer/footer.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { RouterModule } from '@angular/router';
import { NowShowingSectionComponent } from './now-showing-section/now-showing-section.component';
import { PromotionSectionComponent } from './promotion-section/promotion-section.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { ItemHomeShowingComponent } from './home-showing-movie/item-home-showing/item-home-showing.component';
import Swal from 'sweetalert2';
import { ThongTinUserComponent } from './thong-tin-user/thong-tin-user.component'
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, SliderComponent, HomeShowingMovieComponent, TinTucComponent, KhuyenMaiComponent, FooterComponent, NowShowingSectionComponent, PromotionSectionComponent, HomeLayoutComponent, ItemHomeShowingComponent, ThongTinUserComponent, ModalPopupComponent],
  exports:[HomeComponent,HeaderComponent,NowShowingSectionComponent, PromotionSectionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SlickCarouselModule,
    OwlModule,
    NgxPageScrollModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    
  ]
})
export class HomeModule { }
