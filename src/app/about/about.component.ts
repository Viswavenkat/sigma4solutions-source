import { Component,OnInit } from '@angular/core';
import * as AOS from 'aos';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
  }
  constructor(private seoService: SeoService) { }

 ngOnInit(): void {
  AOS.init();
   this.seoService.setTitle('Letsify Sigma4Solutions - 2012|About US | Expertise Service | Leading Company in Karaikudi |');
   this.seoService.setMetaKeywords('best web design company in karaikudi, website design company in karaikudi, it companies in karaikudi, web development company in karaikudi, website design company near Karaikudi, best website design company in tamilnadu, web designer karaikudi, software company in karaikudi, digital marketing company in karaikudi, advertising agency in karaikudi,  Software Development Company, Website design and development, Erp development, Custom Software Development, software companies in Karaikudi,  Website design company Karaikudi, website designer Karaikudi, Website design company Karaikudi, website designer Karaikudi, website maintenance ,software development services, ERP software development company, mobile app development company ,best ERP solution, UI/UX design in Karaikudi');
   this.seoService.setMetaDescription('Welcome to Sigma4Solutions! leading IT/ITES company established in 2012. Our team is committed to providing you with exceptional services, placing a strong emphasis on data security, premium quality, and efficient turnaround time.');
 }

}