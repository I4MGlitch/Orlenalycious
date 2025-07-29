import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FudgeBrowniesPageComponent } from './fudge-brownies-page/fudge-brownies-page.component';
import { OurStoryPageComponent } from './our-story-page/our-story-page.component';
import { PastryCroissantPageComponent } from './pastry-croissant-page/pastry-croissant-page.component';
import { BrowniesTartPageComponent } from './brownies-tart-page/brownies-tart-page.component';
import { IceCreamCreationPageComponent } from './ice-cream-creation-page/ice-cream-creation-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'fudge-brownies', component: FudgeBrowniesPageComponent},
  { path: 'our-story', component: OurStoryPageComponent},
  { path: 'pastry-croissant', component: PastryCroissantPageComponent},
  { path: 'brownies-tart', component: BrowniesTartPageComponent},
  { path: 'ice-cream', component: IceCreamCreationPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
