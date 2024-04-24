import { Component ,OnInit} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
  }
  ngOnInit() {
    AOS.init();
 }
 


}
