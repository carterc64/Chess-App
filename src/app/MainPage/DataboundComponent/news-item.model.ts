export class NewsItemModel {

    img: string;
    bodyText: string;
    nameText: string;
    navLink: string;
    number: string;
    reset: string;

    constructor(
        img: string,
        bodyText: string,
        nameText: string,
        navLink: string,
        number: string,
        reset: string
    ){

        this.img = img;
        this.bodyText = bodyText;
        this.nameText = nameText;
        this.navLink = navLink;
        this.number = number;
        this.reset = reset;
    }


}