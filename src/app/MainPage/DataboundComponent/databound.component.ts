import { Component, Input } from "@angular/core";

@Component({
    selector: 'databound-card',
    templateUrl: 'databound.component.html',
    styleUrls: ['databound.component.css']
})

export class DataboundCardComponent{
    @Input() img: string;
    @Input() bodyText: string;
    @Input() nameText: string;
    @Input() navLink: string;

    constructor(){
        this.img = "";
        this.bodyText = "Placeholder";
        this.nameText = "Placeholder";
        this.navLink = "";
    }



}