import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataboundCardComponent } from './MainPage/DataboundComponent/databound.component';
import { VerticalCardComponent } from './MainPage/vertical.card.component';
import { VerticalCardComponent2 } from './MainPage/vertical.card.component2';
import { VerticalCardComponent3 } from './MainPage/vertical.card.component3';
import { FooterComponent } from './Navigation/footer/footer.component';
import { SidebarCompnent } from './Navigation/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayLayoutComponent } from './OtherPages/PlayLayout/play-layout.component';
import { HomeLayoutComponent } from './MainPage/home-layout.component';
import { PuzzlesLayoutComponent } from './OtherPages/puzzles-layout.component';
import { RegisterLayoutComponent } from './OtherPages/register-layout.component';
import { LessonsLayoutComponent } from './OtherPages/LessonsLayout/lessons-layout.component';
import { RegularCardComponent } from './OtherPages/regular-card.component';
import { PlayOptionsCardComponent } from './OtherPages/PlayLayout/play-options-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarCompnent,
    FooterComponent,
    VerticalCardComponent,
    VerticalCardComponent2,
    VerticalCardComponent3,
    DataboundCardComponent,
    PlayLayoutComponent,
    HomeLayoutComponent,
    PuzzlesLayoutComponent,
    RegisterLayoutComponent,
    LessonsLayoutComponent,
    RegularCardComponent,
    PlayOptionsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
