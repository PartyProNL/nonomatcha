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
                        handle
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

    private productByIdQuery = `
        query ProductByHandle($handle: String!) {
            product(handle: $handle) {
                handle
                title
                description
                priceRange {
                    minVariantPrice {
                        amount
                    }
                }
                images(first:10) {
                    edges {
                        node {
                            url
                        }
                    }
                }
            }
        }
    `

    public async getProductById(id: string): Promise<Product> {
        const response = await shopifyClient.request(
            this.productByIdQuery,
            {
                variables: {
                    handle: id,
                }
            }
        );
        return this.mapper.toProduct(response.data.product)
    }
}
