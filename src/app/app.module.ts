import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component'


import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component'

import { RouterModule, Routes } from '@angular/router'

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { HttpClientModule} from '@angular/common/http'
import { Http } from '@angular/http'
import { DataService } from './service/data.service'

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
    BrowserModule,
    Angular2FontawesomeModule,
    HttpClientModule
    
  ],
  providers: [DataService, Http],
  bootstrap: [AppComponent]
})
export class AppModule { }
