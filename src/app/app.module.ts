import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { LoginComponent } from './components/login/login.component';
import { FacultyLoginComponent } from './components/faculty-login/faculty-login.component';
import { HomeComponent } from './components/home/home.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { FacultyModifyDataComponent } from './faculty-modify-data/faculty-modify-data.component';

const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'studentlogin',component:StudentLoginComponent},
  {path:'facultylogin',component:FacultyLoginComponent},
  {path:'studentprofile',component:StudentProfileComponent},
  { path: 'facultymodifydata', component:FacultyModifyDataComponent}
 
];

@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    LoginComponent,
    FacultyLoginComponent,
    HomeComponent,
    StudentProfileComponent,
    FacultyModifyDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{ enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
