import type {Product} from "../../domain/products/Product.ts";
import {ShopifyProductsDataSource} from "../../shopify/products/ShopifyProductsDataSource.ts";

export class ProductsRepository {

    private popularProductsStorage: Product[] | null = null

    private dataSource = new ShopifyProductsDataSource()

    public async getPopularProducts(): Promise<Product[]> {
        if (this.popularProductsStorage == null) {
            const result = await this.dataSource.getPopularProducts()
            this.popularProductsStorage = result
            return result
        } else {
            return this.popularProductsStorage
        }
    }

    public async getProductById(id: string): Promise<Product> {
        return this.dataSource.getProductById(id)
    }
}
