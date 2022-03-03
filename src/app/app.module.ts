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
import { PuzzlesLayoutComponent } from './OtherPages/PuzzlesLayout/puzzles-layout.component';
import { RegisterLayoutComponent } from './OtherPages/RegisterLayout/register-layout.component';
import { LessonsLayoutComponent } from './OtherPages/LessonsLayout/lessons-layout.component';
import { RegularCardComponent } from './OtherPages/RegularCardComponent/regular-card.component';
import { PlayOptionsCardComponent } from './OtherPages/PlayLayout/play-options-card.component';
import { PuzzlesOptionsComponent } from './OtherPages/PuzzlesLayout/puzzles-options.component';
import { PuzzlesNavbarComponent } from './OtherPages/LessonsLayout/puzzles-navbar.component';
import { LoginLayoutComponent } from './OtherPages/LoginComponent/login-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './UserInfo/user-info.component';

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
    PlayOptionsCardComponent,
    PuzzlesOptionsComponent,
    PuzzlesNavbarComponent,
    LoginLayoutComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
