import {ProductsRepository} from "../../data/products/ProductsRepository.ts";
import type {Product} from "./Product.ts";

export class ProductsService {

    private repository = new ProductsRepository()

    public async getPopularProducts(): Promise<Product[]> {
        return this.repository.getPopularProducts()
    }

    public async getProductById(id: string): Promise<Product> {
        return this.repository.getProductById(id)
    }
}
