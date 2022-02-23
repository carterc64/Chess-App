import { Component, Input} from "@angular/core";


@Component({
    selector: 'regular-card',
    templateUrl: 'regular-card.component.html',
    styleUrls: ['regular-card.component.css']
})

export class RegularCardComponent {
    @Input() img: string;
    @Input() titleText: string;
    @Input() bodyText: string;
    @Input() nameText: string;
    @Input() bottomText: string;

    constructor(){
        this.img = "";
        this.titleText= "Placeholder";
        this.bodyText = "Placeholder";
        this.nameText = "Placeholder";
        this.bottomText = "Placeholder";
    }

}