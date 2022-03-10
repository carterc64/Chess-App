import  { Component, OnInit } from "@angular/core";

import { NewsItemModel } from "./DataboundComponent/news-item.model";
import { NewsService } from "./news.service";

@Component({
    selector : 'home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})


export class HomeLayoutComponent implements OnInit {
      /*First two news cards*/
  products: NewsItemModel[] = [];
  /*Second two news cards*/
  products2: NewsItemModel[] = [];


  constructor(private service: NewsService) {
    
   
  }

  ngOnInit(): void{
    console.log("Fetch data");
    this.service.getNews1().subscribe(data => {
      console.log(data);
      for (var news of data){
        this.products.push(news);
      }
    });
    this.service.getNews2().subscribe(data => {
      console.log(data);
      for (var news of data){
        this.products2.push(news);
      }
    });
  }
}