import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private titleService: Title, private metaService: Meta) { }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  setMetaKeywords(keywords: string) {
    this.metaService.updateTag({ name: 'keywords', content: keywords });
  }

  setMetaDescription(description: string) {
    this.metaService.updateTag({ name: 'description', content: description });
  }
}