import { Component } from '@angular/core';
import { mock_news_list1 } from './MainPage/DataboundComponent/mock-news-list1';
import { NewsItemModel } from './MainPage/DataboundComponent/news-item.model';
import { mock_news_list2 } from './MainPage/DataboundComponent/mock-news-list2';
import { NewsItemModel2 } from './MainPage/DataboundComponent/news-item2.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Chess-App';
  products: NewsItemModel [] = [];
  products2: NewsItemModel2 [] = [];

  constructor(){
    for (var product of mock_news_list1){
      console.log(product);
      this.products.push(product);
    }

    for (var product2 of mock_news_list2){
      console.log(product2);
      this.products2.push(product2);
    }
  }

 
}
