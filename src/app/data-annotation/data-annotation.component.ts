import { Component,OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-data-annotation',
  templateUrl: './data-annotation.component.html',
  styleUrls: ['./data-annotation.component.css']
})
export class DataAnnotationComponent implements OnInit {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
  }
  ngOnInit() {
    AOS.init();
 }
 


}