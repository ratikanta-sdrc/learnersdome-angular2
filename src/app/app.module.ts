import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component'


import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component'

import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
  
  {
    path: '',
    component: LandingComponent,
    data: { title: 'Learner\'s Dome' }
  },
  { path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: '**', component: LandingComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
