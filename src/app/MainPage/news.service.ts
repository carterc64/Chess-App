import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { NewsItemModel } from "./DataboundComponent/news-item.model";


@Injectable({
    providedIn: 'root'
})
export class NewsService{

   

    constructor(private db:AngularFireDatabase){
        
    }

    public getNews1() {
        return this.db.list<NewsItemModel>("newsList1").valueChanges();
    }

    public getNews2() {
        return this.db.list<NewsItemModel>("newsList2").valueChanges();
    }

    public getNews (index: number){
        return this.db.list("newsList1", ref=> ref.orderByChild("bodyText")).valueChanges();
    }


}