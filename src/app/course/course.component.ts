import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  constructor(private router: Router) {}

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