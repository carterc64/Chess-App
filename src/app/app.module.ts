import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataboundCardComponent } from './MainPage/databound.component';
import { VerticalCardComponent } from './MainPage/vertical.card.component';
import { VerticalCardComponent2 } from './MainPage/vertical.card.component2';
import { VerticalCardComponent3 } from './MainPage/vertical.card.component3';
import { FooterComponent } from './Navigation/footer/footer.component';
import { SidebarCompnent } from './Navigation/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarCompnent,
    FooterComponent,
    VerticalCardComponent,
    VerticalCardComponent2,
    VerticalCardComponent3,
    DataboundCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
