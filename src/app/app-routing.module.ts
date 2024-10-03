import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataAnnotationComponent } from './data-annotation/data-annotation.component';
import { AccessComponent } from './access/access.component';
import { DigitalComponent } from './digital/digital.component';
import { SoftwareComponent } from './software/software.component';
import { CourseComponent } from './course/course.component';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';
import { EnrollComponent } from './enroll/enroll.component';
import { InternshipComponent } from './internship/internship.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path:'' , component : HomeComponent},
  { path:'about_us' , component : AboutComponent},
  { path:'data_annotation' , component : DataAnnotationComponent},
  { path:'accessibility_services' , component : AccessComponent },
  { path:'e-publishing_services' , component : DigitalComponent },
  { path:'software_services' , component : SoftwareComponent},
  {path:"course", component:CourseComponent},
  {path:"digitalmarketing", component:DigitalmarketingComponent},
  {path:"enroll", component:EnrollComponent},
  {path:"internship", component:InternshipComponent},
  {path:"product", component:ProductsComponent},

  {path:"**", redirectTo:""},
  {path:"about_us", redirectTo:""},
  {path:"data_annotation", redirectTo:""},
  {path:"accessibility_services", redirectTo:""},
  {path:"e-publishing_services", redirectTo:""},
  {path:"software_services", redirectTo:""},
  {path:"course", redirectTo:""},
  {path:"digitalmarketing",  redirectTo:""},
  {path:"enroll",  redirectTo:""},
  {path:"internship",  redirectTo:""},
  {path:"product",  redirectTo:""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }