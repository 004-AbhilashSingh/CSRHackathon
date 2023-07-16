import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { LoginComponent } from './components/login/login.component';
import { FacultyLoginComponent } from './components/faculty-login/faculty-login.component';
import { HomeComponent } from './components/home/home.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';

const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'studentlogin',component:StudentLoginComponent},
  {path:'facultylogin',component:FacultyLoginComponent},
  {path:'studentprofile',component:StudentProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    LoginComponent,
    FacultyLoginComponent,
    HomeComponent,
    StudentProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{ enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
