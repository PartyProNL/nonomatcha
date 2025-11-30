import {Product} from "../../domain/products/Product.ts";
import {Image} from "../../domain/images/Image.ts";

export class ShopifyProductsMapper {

    public toProducts(data: any): Product[] {
        return data.products.edges.map((it: any) => {
            return new Product(
                it.node.id,
                it.node.title,
                it.node.description,
                it.node.priceRange.minVariantPrice.amount,
                this.toImages(it.node.images)
            )
        })
    }

    private toImages(data: any): Image[] {
        return data.edges.map((it: any) => {
            return new Image(
                it.node.url
            )
        })
    }
}
