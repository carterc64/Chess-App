export class ProductItemModel {

    img: string;
    bodyText: string;
    nameText: string;
    navLink: string;

    constructor(
        img: string,
        bodyText: string,
        nameText: string,
        navLink: string
    ){

        this.img = img;
        this.bodyText = bodyText;
        this.nameText = nameText;
        this.navLink = navLink;
    }


}