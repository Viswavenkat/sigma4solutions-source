import { Component,OnInit } from '@angular/core';
import * as AOS from 'aos';
import { SeoService } from '../seo.service';
@Component({
  selector: 'app-data-annotation',
  templateUrl: './data-annotation.component.html',
  styleUrls: ['./data-annotation.component.css']
})
export class DataAnnotationComponent implements OnInit {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
  }
  constructor(private seoService: SeoService) { }

 ngOnInit(): void {
  AOS.init();
   this.seoService.setTitle('Letsify  Sigma4Solutions  | IT/ITES Services | Data Annotation Services | Image Annotation | Text Annotation | Audio Annotation | Leading Company in Karaikudi');
   this.seoService.setMetaKeywords('karikudi data annotation,data annotation jobs in tamilnadu,data annotator jobs,ai services,ai services website,ai services company,data labelling and annotation,data labelling companies,data labelling companies in india,image annotation process,video annotation services,polygon annotation, keypoint annotation,bounding box annotation,Video Labeling for ML');
   this.seoService.setMetaDescription('Sigma4Solutions is a data annotation service provider that offers a range of annotation services used for training machine learning and deep learning models.');
 }



}