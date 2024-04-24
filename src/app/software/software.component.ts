import { Component,OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent  implements OnInit{
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
  }
  ngOnInit() {
    AOS.init();
 }
 
constructor(
  private meta :Meta , private titleService: Title ){
 this.meta.addTag({name:'description', content:'Sigma4Solutions'});
 this.meta.addTag({name:'keywords',content:'accessibility services,data annotation,about data annotation,digital publishing companies,accessibility reviews,e publishing,karaikudi,karaikudi it companies website,sigma,sigma 4,sigma solution,sigma4solutions karaikudi,sigma4solutions,software services,what is data annotation,software services & consultancy,what is data annotation,software services company'});
   
 }
 
}