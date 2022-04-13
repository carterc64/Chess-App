import { Component, OnInit } from '@angular/core';
import { NewsItemModel } from '../DataboundComponent/news-item.model';
import { NewsService } from './news.service';

@Component({
  selector: 'fm-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  constructor(private ps:NewsService) { }

  ngOnInit(): void {
  }

  replaceNews(product:NewsItemModel){
    console.log("You pressed replace news");
    console.log(product);
    this.ps.replaceNews(product);
  }
}
