import { Component,OnInit } from '@angular/core';
import * as AOS from 'aos';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css']
})
export class DigitalComponent implements OnInit{
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
  }
  constructor(private seoService: SeoService) { }

 ngOnInit(): void {
  AOS.init();
   this.seoService.setTitle(' Letsify  Sigma4Solutions  | IT/ITES Services |  Type Setting Services | Digital Publishing Services | Leading Company in Karaikudi');
   this.seoService.setMetaKeywords('digital publishing companies,digital publishing companies in india,Best Publishing House in India,Best Publishing House in chennai,List of Publishing Companies in India, Best Digital Publishing Companies,Publishing Companies,typesetting services,Book Typesetting Services in India, Professional Typesetting Services,Typesetting Services print layout design, Outsource Typesetting Services ,Typesetting services near me');
   this.seoService.setMetaDescription('Sigma4Solutions specializes in typesetting on various platforms, including Adobe InDesign, QuarkXPress, LaTeX, Microsoft Word, and PageMaker. These platforms are commonly used in the publishing and design industry for document layout and formatting.');
 }



}
