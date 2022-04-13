import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { NewsItemModel } from "../DataboundComponent/news-item.model";
import { elementAt } from 'rxjs';


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

    public replaceNews(product:NewsItemModel){
        if(product.reset ==='1' ){
            if (product.number === '1') {
                const itemsRef = this.db.list('newsList1');
                itemsRef.remove();
            } else if (product.number === '2') {
                const itemsRef = this.db.list('newsList2');
                itemsRef.remove();
            }
            
           
            
        } 

        if (product.number === '1') {
            
            this.db.list<NewsItemModel>("newsList1").push(product);
        } else if(product.number === '2'){
            
            this.db.list<NewsItemModel>("newsList2").push(product);
        } 
       
            this.db.list<NewsItemModel>("replamentNews").push(product);
        
        
       
    }

}