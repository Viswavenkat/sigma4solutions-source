import { Component,OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Meta,Title } from '@angular/platform-browser';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent  implements OnInit{
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
  }
  ngOnInit(): void { 
    AOS.init();
    this.seoService.setTitle('Letsify Sigma4Solutions | IT/ITES |  Leading Software Services Provider in Karaikudi');
    this.seoService.setMetaKeywords(' best website design company Karaikudi,website design Company in Karaikudi,website designing company in Karaikudi,web design Company in Karaikudi/India,Website Design Company in Karaikudi/ Sivaganga(Dt.), Website designers in Karaikudi,mobile application development in karaikudi,web designers company in karaikudi, winzone softech career opportunities,job openings karaikudi,career opportunities in India,job offers in India,IT job offers in Tamilnadu,PHP jobs,SEO job openings,web designing openings,web developer openings,training,web designing,web developing,final year projects,software development,IT companies in Karaikudi,software companies in Karaikudi,Web Development,Best Digital Marketing Company in Karaikudi,Top SEO Company in Karaikudi,SEM,SMO Company,Web Design,Enterprise Application Integration,24 X 7,support,application,database,servers,software Solutions');
    this.seoService.setMetaDescription('Sigma4Solutions stands out as the foremost provider of IT/ITES services among software companies in Karaikudi. Experience excellence in technology with Sigma4Solutions as your trusted partner.');
 
 }
 
constructor(
  private meta :Meta , private titleService: Title ,private seoService: SeoService){
 this.meta.addTag({name:'description', content:'Sigma4Solutions'});
 this.meta.addTag({name:'keywords',content:'accessibility services,data annotation,about data annotation,digital publishing companies,accessibility reviews,e publishing,karaikudi,karaikudi it companies website,sigma,sigma 4,sigma solution,sigma4solutions karaikudi,sigma4solutions,software services,what is data annotation,software services & consultancy,what is data annotation,software services company'});
   
 }



 
   
}