import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { OurStoryPageComponent } from './our-story-page/our-story-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogDetailPageComponent } from './blog-detail-page/blog-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },

  {
    path: 'about',
    component: OurStoryPageComponent,
  },

  // Keep old URL working
  {
    path: 'our-story',
    redirectTo: 'about',
    pathMatch: 'full',
  },

  {
    path: 'blog',
    component: BlogPageComponent,
  },

  {
    path: 'blog/:slug',
    component: BlogDetailPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
