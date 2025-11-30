import {ProductsRepository} from "../../data/products/ProductsRepository.ts";
import type {Product} from "./Product.ts";

export class ProductsService {

    private repository = new ProductsRepository()

    public async getPopularProducts(amount: number): Promise<Product[]> {
        return this.repository.getPopularProducts(amount)
    }

    public async getProductById(id: string): Promise<Product> {
        return this.repository.getProductById(id)
    }
}
