import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-product-duplicate',
  templateUrl: './product-duplicate.component.html',
  styleUrls: ['./product-duplicate.component.css']
})
export class ProductDuplicateComponent implements OnInit {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
  }
  ngOnInit() {
    AOS.init();
 }
 
}
