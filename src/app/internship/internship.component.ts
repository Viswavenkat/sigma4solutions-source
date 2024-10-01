import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent {
  constructor(private router: Router) {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });}

    navigateToEnroll(): void {
      this.router.navigate(['/enroll']);
    }
}
