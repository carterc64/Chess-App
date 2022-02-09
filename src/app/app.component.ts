import { Component } from '@angular/core';
import { mock_product_list } from './MainPage/mock-product-list';
import { ProductItemModel } from './MainPage/product-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Chess-App';
  products: ProductItemModel [] = [];

  constructor(){
    for (var product of mock_product_list){
      console.log(product);
      this.products.push(product);
    }
  }
}
