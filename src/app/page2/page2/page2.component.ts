import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SeoService } from "src/app/seo.service";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

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
    this.titleService.setTitle('Home page 2');
    this.metaService.updateTag({ name: 'title', content: 'Home page meta title 2' });
    this.metaService.removeTag('description');
    this.metaService.updateTag({ name: 'description', content: 'Home page description 2' });
    this.metaService.removeTag('keywords');
    this.metaService.updateTag({ name: 'keywords', content: 'Home page keyword 2' });
  }

}
