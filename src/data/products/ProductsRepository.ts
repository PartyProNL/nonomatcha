import type {Product} from "../../domain/products/Product.ts";
import {ShopifyProductsDataSource} from "../../shopify/products/ShopifyProductsDataSource.ts";

export class ProductsRepository {

    private dataSource = new ShopifyProductsDataSource()

    public async getPopularProducts(amount: number): Promise<Product[]> {
        return this.dataSource.getPopularProducts(amount)
    }

    public async getProductById(id: string): Promise<Product> {
        return this.dataSource.getProductById(id)
    }
}
