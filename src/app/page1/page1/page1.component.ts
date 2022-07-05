import { SeoService } from './../../seo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private SEOService: SeoService,
    private route: ActivatedRoute, private titleService: Title, private metaService: Meta) { }

  // ngOnInit(): void {
  //   console.log("eee")
  //   const { meta } = this.route.snapshot.data;
  //   this.SEOService.updateTitle(meta.title);
  //   this.SEOService.updateDescription(meta.description);
  // }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log('Check route resolver data');
      console.log(data);

      this.setAdMetaData(data.res); // here in res key return resolver service data
    })
  }


  setAdMetaData(ad_seo_data: any) {
    console.log("ssss" , ad_seo_data)
    this.titleService.setTitle('Home page 1');
    this.metaService.updateTag({ name: 'title', content: 'Home page meta title' });
    this.metaService.removeTag('description');
    this.metaService.updateTag({ name: 'description', content: 'Home page description' });
    this.metaService.removeTag('keywords');
    this.metaService.updateTag({ name: 'keywords', content: 'Home page keyword' });
  }

}
