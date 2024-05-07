import { Component ,OnInit} from '@angular/core';
import * as AOS from 'aos';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
  }
  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
   AOS.init();
    this.seoService.setTitle(' Letsify  Sigma4Solutions  | IT/ITES Services | Accessibility Services | Leading Company in Karaikudi ');
    this.seoService.setMetaKeywords('accessibility services in karaikudi,  PDF Accessibility services in karaikudi, PPT accessibility services in karaikudi, Word accessibility services in karaikudi');
    this.seoService.setMetaDescription('Letsify Sigma4Solutions is the Only leading company for accessibility services in Karaikudi.');
  }


}
