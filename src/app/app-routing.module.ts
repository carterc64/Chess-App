import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayLayoutComponent } from './OtherPages/PlayLayout/play-layout.component';
import { HomeLayoutComponent } from './MainPage/home-layout.component';
import { PuzzlesLayoutComponent } from './OtherPages/puzzles-layout.component';
import { RegisterLayoutComponent } from './OtherPages/register-layout.component';
import { LoginLayoutComponent } from './OtherPages/login-layout.component';
import { LessonsLayoutComponent } from './OtherPages/LessonsLayout/lessons-layout.component';


const routes: Routes = [
  {path: '', component : HomeLayoutComponent },
  {path: 'play', component : PlayLayoutComponent},
  {path: 'home', component : HomeLayoutComponent},
  {path: 'puzzles', component : PuzzlesLayoutComponent},
  {path: 'register', component : RegisterLayoutComponent},
  {path: 'login', component : LoginLayoutComponent},
  {path: 'lessons', component: LessonsLayoutComponent}
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
