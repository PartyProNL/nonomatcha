import type {Image} from "../images/Image.ts";

export class Product {

    public id: string
    public name: string
    public description: string
    public price: number
    public images: Image[]

    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
        images: Image[],
    ) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.images = images
    }
}
