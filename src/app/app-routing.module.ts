import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayLayoutComponent } from './OtherPages/play-layout.component';
import { HomeLayoutComponent } from './MainPage/home-layout.component';


const routes: Routes = [
  {path: 'play', component : PlayLayoutComponent},
  {path: 'home', component : HomeLayoutComponent}
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
