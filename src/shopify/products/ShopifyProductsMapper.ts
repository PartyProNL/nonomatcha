import {Product} from "../../domain/products/Product.ts";
import {Image} from "../../domain/images/Image.ts";

export class ShopifyProductsMapper {

    public toProducts(data: any): Product[] {
        return data.products.edges.map((it: any) => {
            return this.toProduct(it.node)
        })
    }

    public toProduct(data: any): Product {
        return new Product(
            data.handle,
            data.title,
            data.description,
            data.priceRange.minVariantPrice.amount,
            this.toImages(data.images),
        )
    }

    private toImages(data: any): Image[] {
        return data.edges.map((it: any) => {
            return new Image(
                it.node.url
            )
        })
    }
}
