import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutModule } from './layout/layout.module';
import { TrendingsComponent } from './features/trendings/components/trendings/trendings.component';
import { PosterItemComponent } from './features/trendings/components/trendings/poster-item/poster-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    TrendingsComponent,
    PosterItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    NgbModule,
    SlickCarouselModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
