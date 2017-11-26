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
import { HttpModule } from '@angular/http'
import { DataService } from './service/data.service'
import { CourseComponent } from './course/course.component'

const appRoutes: Routes = [
  
  {
    path: '',
    component: LandingComponent,
    data: { title: 'Learner\'s Dome' }
  },
  { path: 'app-home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: 'app-course',
    component: CourseComponent,
    data: { title: 'Course'}
  },
  { path: '**', component: LandingComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CourseComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    Angular2FontawesomeModule,
    HttpClientModule,
    HttpModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
