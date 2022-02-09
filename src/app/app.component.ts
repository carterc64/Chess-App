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

  /*First two news cards*/
  products: NewsItemModel[] = [];
  /*Second two news cards*/
  products2: NewsItemModel[] = [];


  constructor() {
    /*First two*/
    for (var product of mock_news_list1) {
      console.log(product);
      this.products.push(product);
    }
    /*last two*/
    for (var product2 of mock_news_list2) {
      console.log(product2);
      this.products2.push(product2);
    }
  }


}
