import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VerticalCardComponent } from './MainPage/vertical.card.component';
import { FooterComponent } from './Navigation/footer/footer.component';
import { SidebarCompnent } from './Navigation/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarCompnent,
    FooterComponent,
    VerticalCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
