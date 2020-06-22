import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ClassicComponent } from './classic/classic.component';
import { CrossoverComponent } from './crossover/crossover.component';
import { QuestionComponent } from './question/question.component';
import { ContantUsComponent } from './contant-us/contant-us.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    BannerComponent,
    IntroductionComponent,
    ClassicComponent,
    CrossoverComponent,
    QuestionComponent,
    ContantUsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
