import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NewsItemModel } from "./DataboundComponent/news-item.model";


@Injectable({
    providedIn: 'root'
})
export class NewsService{

    private baseUrl: string = 'https://chess-app-8b9f7-default-rtdb.firebaseio.com/';
    private newsEndPoint1: string = 'newsList1.json';
    private newsEndPoint2: string = 'newsList2.json'


    constructor(private http:HttpClient){
        
    }

    public getNews1() {
        return this.http.get<NewsItemModel []>(this.baseUrl + this.newsEndPoint1);
    }

    public getNews2() {
        return this.http.get<NewsItemModel []>(this.baseUrl + this.newsEndPoint2);
    }


}