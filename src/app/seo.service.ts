import { HttpClient } from '@angular/common/http';

import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  public copyrightYear: any = '2021';
  private renderer: Renderer2;
  public geoLocationDetails: any = {};
  public ipAddress: any = {};

  constructor(private http: HttpClient, private titleService: Title, private metaService: Meta, @Inject(DOCUMENT) private dom: any, rendererFactory: RendererFactory2) {
    let d = new Date();
    this.copyrightYear = d.getFullYear();
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setAdMetaData(ad_seo_data: any) {
    this.metaService.removeTag('description');
    this.titleService.setTitle(ad_seo_data.title);
    if (ad_seo_data.metatitle && ad_seo_data.metatitle != '') {
      this.metaService.updateTag({ name: 'title', content: ad_seo_data.metatitle });
    } else {
      this.metaService.updateTag({ name: 'title', content: ad_seo_data.title });
    }
    this.metaService.updateTag({ name: 'description', content: ad_seo_data.description });
    if (ad_seo_data.keywords && ad_seo_data.keywords != '') {
      this.metaService.removeTag('keywords');
      this.metaService.updateTag({ name: 'keywords', content: ad_seo_data.keywords });
    }
    /* Facebook */
    if (ad_seo_data.title && ad_seo_data.title != '') {
      this.metaService.updateTag({ property: 'og:title', content: ad_seo_data.title });
      this.metaService.updateTag({ property: 'twitter:title', content: ad_seo_data.title });
    }

    if (ad_seo_data.feature_image && ad_seo_data.feature_image != '') {
      this.metaService.updateTag({ property: 'og:image', content: ad_seo_data.feature_image });
      this.metaService.updateTag({ property: 'twitter:image', content: ad_seo_data.feature_image });
      this.metaService.updateTag({ name: 'twitter:image', content: ad_seo_data.feature_image });
      this.metaService.updateTag({ name: 'twitter:site', content: '@JolDao_Dot_Com' });
    }
    if (ad_seo_data.description && ad_seo_data.description != '') {
      this.metaService.updateTag({ property: 'og:description', content: ad_seo_data.description });
      this.metaService.updateTag({ property: 'twitter:description', content: ad_seo_data.description });
      this.metaService.updateTag({ name: 'twitter:description', content: ad_seo_data.description });
      this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    }
    this.metaService.updateTag({ name: 'geo.country', content: 'US' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    let copyrightText = "© Copyright JolDao.Com " + this.copyrightYear;
    this.metaService.updateTag({ name: 'rights', content: copyrightText });
    this.metaService.updateTag({ name: 'referrer', content: 'no-referrer-when-downgrade' });
    this.metaService.updateTag({ property: 'og:locale', content: 'en-us' });
    // this.metaService.updateTag({ property: 'fb:app_id', content: environment.firebaseConfig.FACEBOOK_APP_ID });
    this.metaService.updateTag({ property: 'og:image:width', content: '1200' });
    this.metaService.updateTag({ property: 'og:image:height', content: '630' });
    this.metaService.updateTag({ property: 'og:site_name', content: "JolDao.Com | Online Water Delivery" });
    this.metaService.updateTag({ property: 'twitter:card', content: 'summary_large_image' });
    if (!ad_seo_data['nofollow']) {
      this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
    }
    if (ad_seo_data['nofollow']) {
      this.metaService.updateTag({ name: 'robots', content: 'noindex, nofollow' });
      this.metaService.updateTag({ name: 'googlebot', content: 'noindex' });
    }

    return true;
  }

   updateTitle(title: string) {
    console.log("here")
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'title', content: title });
  }

  updateDescription(content: string) {
    this.metaService.updateTag({ name: 'description', content })
  }

  createCanonicalLink(url: string) {
    let link: HTMLLinkElement =
      this.dom.createElement('link');

    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    this.dom.head.appendChild(link);
  }


  // constructor(
  //   @Inject(DOCUMENT) private dom: any,
  //   private titleSvc: Title,
  //   private metaSvc: Meta,
  // ) { }


 
}
