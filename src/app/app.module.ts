import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { FudgeBrowniesPageComponent } from './fudge-brownies-page/fudge-brownies-page.component';
import { OurStoryPageComponent } from './our-story-page/our-story-page.component';
import { PastryCroissantPageComponent } from './pastry-croissant-page/pastry-croissant-page.component';
import { BrowniesTartPageComponent } from './brownies-tart-page/brownies-tart-page.component';
import { IceCreamCreationPageComponent } from './ice-cream-creation-page/ice-cream-creation-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    FudgeBrowniesPageComponent,
    OurStoryPageComponent,
    PastryCroissantPageComponent,
    BrowniesTartPageComponent,
    IceCreamCreationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
