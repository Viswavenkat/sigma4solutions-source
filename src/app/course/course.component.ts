import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SeoService } from '../seo.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  constructor(private router: Router,private seoService: SeoService) {}
  

  ngOnInit(): void {
    this.seoService.setTitle(' Letsify  Sigma4Solutions  | Internship in Karaikudi | Internship for Engineering Students| Engineering Internships | Internship Training in Software Company | software course in karaikudi | software course in karaikudi | software courses for fresher | software courses in software companies| Internship Training in IT Company, Karaikudi - Sigma4Solutions');
    this.seoService.setMetaKeywords('internship training in karaikudi, Internship in karaikudi, internship for fresher, internship in software companies, internship in IT Companies, Internship for Engineering students,software course in karaikudi, software course in karaikudi, software courses for fresher, software courses in software companies, software courses in IT Companies, software courses for Engineering students,');
    this.seoService.setMetaDescription('In Letsify Sigma4Solution, Confirm your expertise with our comprehensive IT training in Karaikudi. Explore our array of software courses in Karaikudi designed to elevate your skills and career prospects');
  }
  downloadFile() {
    const url = 'https://drive.google.com/file/d/1fWX0tkfjDJObQoMMl6sypn1_NxFQ_trl/view?usp=sharing'; 
    const link = document.createElement('a');
    window.open(url, '_blank');
    link.setAttribute('download', 'Our Course Plan'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });}

    navigateToEnroll(): void {
      this.router.navigate(['/enroll']);
    }
}