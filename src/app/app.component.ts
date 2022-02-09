import { Component } from '@angular/core';
import { mock_news_list } from './MainPage/mock-news-list';
import { NewsItemModel } from './MainPage/news-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Chess-App';
  products: NewsItemModel [] = [];

  constructor(){
    for (var product of mock_news_list){
      console.log(product);
      this.products.push(product);
    }
  }
}
