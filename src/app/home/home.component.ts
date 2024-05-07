import { Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import { RouterLink } from '@angular/router';
import { SeoService } from '../seo.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
  }


 constructor(private seoService: SeoService) { }

 ngOnInit(): void {
  AOS.init();
   // Set title, keywords, and description for this component/page
   this.seoService.setTitle(' Letsify Sigma4Solutions Private Limited | IT/ITES Services| Internship Training  | Software Courses');
   this.seoService.setMetaKeywords('about the sigma4solutions, sigma4solutions story, story of sigma4solutions, leading software company in karaikudi,');
   this.seoService.setMetaDescription('Welcome to Sigma4Solutions! leading IT/ITES company established in 2012.  Delivering exceptional value and driving their digital transformation for sustainable growth and success.');
 }


}