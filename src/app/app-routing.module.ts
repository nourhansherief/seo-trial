import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRouterResolverService } from "src/app/seo-resolver";

const metaTages = {
  page1: {
    meta: {
      title: 'page 1 title',
      description: 'page1 description'
    }
  },
  page2: {
    meta: {
      title: 'page 2 title',
      description: 'page 2 description'
    }
  },
  page3: {
    meta: {
      title: 'page 3 title',
      description: 'page 3 description'
    }
  }
}

const sectionRoutes: Routes = [
  {
    path: 'page1',
    data: metaTages.page1,
    loadChildren: () => import('./page1/page1.module').then(m => m.Page1Module),
    resolve: { res: HomeRouterResolverService }
  },
  {
    path: 'page2',
    data: metaTages.page2,
    loadChildren: () => import('./page2/page2.module').then(m => m.Page2Module),
    resolve: { res: HomeRouterResolverService }
  },
  {
    path: 'page3',
    data: metaTages.page3,
    loadChildren: () => import('./page3/page3.module').then(m => m.Page3Module),
    resolve: { res: HomeRouterResolverService }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(sectionRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
