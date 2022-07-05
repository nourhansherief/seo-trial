import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SeoService } from "src/app/seo.service";

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

   constructor(private SEOService: SeoService,
    private route: ActivatedRoute, private titleService: Title, private metaService: Meta) { }

   ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log('Check route resolver data');
      console.log(data);

      this.setAdMetaData(data.res); // here in res key return resolver service data
    })
  }


  setAdMetaData(ad_seo_data: any) {
    this.titleService.setTitle('Home page 3');
    this.metaService.updateTag({ name: 'title', content: 'Home page meta title 3' });
    this.metaService.removeTag('description');
    this.metaService.updateTag({ name: 'description', content: 'Home page description 3' });
    this.metaService.removeTag('keywords');
    this.metaService.updateTag({ name: 'keywords', content: 'Home page keyword 3' });
  }

}
