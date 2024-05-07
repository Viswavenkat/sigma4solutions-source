import { Component } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-digitalmarketing',
  templateUrl: './digitalmarketing.component.html',
  styleUrls: ['./digitalmarketing.component.css']
})
export class DigitalmarketingComponent {
  constructor(private seoService: SeoService) { }

 ngOnInit(): void {
 
   this.seoService.setTitle(' Letsify Sigma4Solutions | Best Digital Marketing Company in Karaikudi | SEO, Mobile App, Web & E-commerce Solutions');
   this.seoService.setMetaKeywords('Best Digital marketing company in Karaikudi, Best SEO Company in Karaikudi,Social marketing company in Karaikudi,Digital marketing Company in Karaikudi/India, Search engine optimization company in Karaikudi/ Sivaganga(Dt.), Professional digital marketing in Karaikudi,Social media marketing(SMM) in karaikudi,Search engine marketing(SEM) company in karaikudi, Pay per click(ppc) in karaikudi, Top SEO Company in Karaikudi,SEM,SMO Company,24 X 7,support, Web analytics in karaikudi, site mapping, keyword research, Site map creation in karaikudi');
   this.seoService.setMetaDescription('Sigma4Solutions: Your premier digital marketing company in Karaikudi. Elevate your brand with our expert SEO, mobile app, web application, e-commerce, and digital marketing solutions. Trust our experienced team to boost your online presence and drive business growth');
 }
}
