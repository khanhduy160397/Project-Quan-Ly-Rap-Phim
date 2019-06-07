import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { MaterialModule } from './share_modules/material.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OwlModule } from 'ngx-owl-carousel';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollModule,
    MaterialModule,
    SlickCarouselModule,
    OwlModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
