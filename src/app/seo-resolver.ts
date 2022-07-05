import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { map } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';
import { SeoService } from "src/app/seo.service";


@Injectable({ providedIn: 'root' })
export class HomeRouterResolverService implements Resolve<any> {
  constructor(private router: Router, private _seoService: SeoService) { }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot) {
    console.log("eeeee" , activatedRouteSnapshot)
    let seoData: any = {};
    seoData['title'] = "";
    seoData['feature_image'] = "";
    seoData['description'] = "";
    seoData['keywords'] = "";
    this._seoService.setAdMetaData(activatedRouteSnapshot['data']['meta']);
    return true;
  }
}
