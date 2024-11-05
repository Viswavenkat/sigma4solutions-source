import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card'; 
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { DataAnnotationComponent } from './data-annotation/data-annotation.component';
import { AccessComponent } from './access/access.component';
import { DigitalComponent } from './digital/digital.component';
import { SoftwareComponent } from './software/software.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from './cache.interceptor';
import { CourseComponent } from './course/course.component';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';
import { EnrollComponent } from './enroll/enroll.component';
import { InternshipComponent } from './internship/internship.component';
import { ProductsComponent } from './products/products.component';
import { ProductDuplicateComponent } from './product-duplicate/product-duplicate.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DataAnnotationComponent,
    AccessComponent,
    DigitalComponent,
    SoftwareComponent,
    CourseComponent,
    DigitalmarketingComponent,
    EnrollComponent,
    InternshipComponent,
    ProductsComponent,
    ProductDuplicateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatTabsModule,FormsModule,MatCardModule,MatMenuModule,MatExpansionModule, ReactiveFormsModule
  ],
  providers: [    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }