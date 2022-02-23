import { Component } from "@angular/core";
import { RegularCardModel } from "../regular-card.model";
import { new_to_chess_list } from "./new-to-chess-list";
import { beginner_chess_list } from "./beginner-chess-list";
import { intermediate_chess_list } from "./intermediate-chess-list";
import { advanced_chess_list } from "./advanced-chess-list";

@Component({
    selector: 'lessons-layout',
    templateUrl: 'lessons-layout.component.html',
    styleUrls: ['lessons-layout.component.css']
})

export class LessonsLayoutComponent {
      /*First two news cards*/
  products: RegularCardModel[] = [];
  /*Second two news cards*/
  products2: RegularCardModel[] = [];
  products3: RegularCardModel[] = [];
  products4: RegularCardModel[] = [];


  constructor() {
    
     /*First two*/
     for (var product of new_to_chess_list) {
        console.log(product);
        this.products.push(product);
      }

      for (var product2 of beginner_chess_list) {
        console.log(product2);
        this.products2.push(product2);
      }

      for (var product3 of intermediate_chess_list) {
        console.log(product3);
        this.products3.push(product3);
      }

      for (var product4 of advanced_chess_list) {
        console.log(product4);
        this.products4.push(product4);
      }

     
     
    }
 }
