import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page3Component } from "src/app/page3/page3/page3.component";

const routes: Routes = [
  {
    path: '',
    component: Page3Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page3RoutingModule { }


