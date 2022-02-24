

export class RegularCardModel {

    img: string;
    titleText: string;
    bodyText: string;
    nameText: string;
    bottomText: string;

    constructor(
        img: string,
        titleText: string,
        bodyText: string,
        nameText: string,
        bottomText: string
    ){

        this.img = img;
        this.titleText = titleText;
        this.bodyText = bodyText;
        this.nameText = nameText;
        this.bottomText= bottomText;
    }


}