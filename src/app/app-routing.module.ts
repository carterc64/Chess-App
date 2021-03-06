import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayLayoutComponent } from './OtherPages/PlayLayout/play-layout.component';
import { HomeLayoutComponent } from './MainPage/home-layout.component';
import { PuzzlesLayoutComponent } from './OtherPages/PuzzlesLayout/puzzles-layout.component';
import { RegisterLayoutComponent } from './OtherPages/RegisterLayout/register-layout.component';
import { LoginLayoutComponent } from './OtherPages/LoginComponent/login-layout.component';
import { LessonsLayoutComponent } from './OtherPages/LessonsLayout/lessons-layout.component';
import { AddNewsComponent } from './MainPage/add-news/add-news.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';


const routes: Routes = [
  {path: '', component : HomeLayoutComponent },
  {path: 'play', component : PlayLayoutComponent},
  {path: 'home', component : HomeLayoutComponent},
  {path: 'puzzles', component : PuzzlesLayoutComponent},
  {path: 'register', component : RegisterLayoutComponent},
  {path: 'login', component : LoginLayoutComponent},
  {path: 'lessons', component: LessonsLayoutComponent},
  {path: 'admin', component : AddNewsComponent },
  {path: 'auth', component : AuthenticationComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
