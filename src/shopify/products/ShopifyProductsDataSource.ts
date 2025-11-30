import type {Product} from "../../domain/products/Product.ts";
import {shopifyClient} from "../ShopifyClient.ts";
import {ShopifyProductsMapper} from "./ShopifyProductsMapper.ts";

export class ShopifyProductsDataSource {

    private mapper = new ShopifyProductsMapper()

    // Query tester
    // https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration/graphiql-storefront-api

    private popularProductsQuery = `
        query PopularProductsQuery() {
            products(first: 10, sortKey: BEST_SELLING) {
                edges {
                    node {
                        id
                        title
                        description
                        priceRange {
                            minVariantPrice {
                                amount
                            }
                        }
                        images(first:2) {
                            edges {
                                node {
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    `;

    public async getPopularProducts(): Promise<Product[]> {
        const response = await shopifyClient.request(this.popularProductsQuery);
        return this.mapper.toProducts(response.data)
    }
}
