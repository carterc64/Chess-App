import { Component } from '@angular/core';
import { mock_news_list1 } from './MainPage/DataboundComponent/mock-news-list1';
import { NewsItemModel } from './MainPage/DataboundComponent/news-item.model';
import { mock_news_list2 } from './MainPage/DataboundComponent/mock-news-list2';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Chess-App';



}
