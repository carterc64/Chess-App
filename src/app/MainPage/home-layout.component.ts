import  { Component } from "@angular/core";
import { mock_news_list1 } from "./DataboundComponent/mock-news-list1";
import { mock_news_list2 } from "./DataboundComponent/mock-news-list2";
import { NewsItemModel } from "./DataboundComponent/news-item.model";

@Component({
    selector : 'home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent{
      /*First two news cards*/
  products: NewsItemModel[] = [];
  /*Second two news cards*/
  products2: NewsItemModel[] = [];


  constructor() {
    /*First two*/
    for (var product of mock_news_list1) {
      
      this.products.push(product);
    }
    /*last two*/
    for (var product2 of mock_news_list2) {
      
      this.products2.push(product2);
    }
  }
}