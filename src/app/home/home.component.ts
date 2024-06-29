import { Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
  }

  ngOnInit() {
    AOS.init();
 }

}